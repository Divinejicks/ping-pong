import { StyledButton } from "../Rank.styled";
import Web3Modal from "web3modal";
import { Contract, providers, utils } from "ethers";
import { useEffect, useRef, useState } from "react";
import { Badge_ABI, Badge_Address } from "../../constants";

export default function MintBadge() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [hyphenatedAddress, setHyphenatedAddress] = useState("");

  const web3ModalRef = useRef<Web3Modal>();

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    }
  }, [walletConnected]);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current!.connect();
    const web3Provider = new providers.Web3Provider(provider);
    //addListeners(web3Provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to polygon mumbai");
      //throw new Error("Change network to polygon mumbai");
    }

    const addr = await web3Provider.getSigner().getAddress();
    setAddress(addr);
    const _addressSub1 = addr.substring(0, 5);
    const _addressSub2 = addr.substring(38);
    setHyphenatedAddress(_addressSub1 + "...." + _addressSub2);

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  const getERC721BadgeSigner = async () => {
    const signer = await getProviderOrSigner(true);
    const Badge = new Contract(Badge_Address, Badge_ABI, signer);

    return Badge;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.log(error);
    }
  };

  const mintBadge = async () => {
    const Badge = await getERC721BadgeSigner();
    const currentPrice = await Badge.price();
    const price: any = utils.formatEther(currentPrice);
    const priceToPay = 1 * price;
    await Badge.mintBadge(2, 1, {
      value: utils.parseEther(priceToPay.toString()),
    });
  };

  return (
    <>
      {!walletConnected && (
        <>
          <p>
            <i>
              To collect the winner's NFT connect your{" "}
              <strong>Polygon mumbai testnet account</strong>
            </i>
          </p>
          <StyledButton onClick={connectWallet}> Connect </StyledButton>
        </>
      )}
      {walletConnected && (
        <>
          <p>Connected with address {hyphenatedAddress}</p>
          <StyledButton onClick={mintBadge}>Mint</StyledButton>
        </>
      )}
    </>
  );
}
