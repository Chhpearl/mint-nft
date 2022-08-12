import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import testnftAbi from '../abi/testnft.json'
import { ethers } from 'ethers'
// import { useVault, useNftTest, useERC20 } from 'hooks/useContract'
// import { getBalanceAmount, getDecimalAmount } from 'utils/formatBalance'
// import {
//   getVaultContract, getConfigContract, getTestNftContract,
//   getWeb3Erc721Contract, getWeb3TestNftContract, getErc721Contract
// } from 'utils/contractHelpers';
// import useToast from 'hooks/useToast'
// import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
// import { getAddress } from 'utils/addressHelpers'
// import { Address } from 'config/constants/types'
// import { Dao } from 'state/types'




const MainContent: React.FC = () => {
    // const { account } = useWeb3React()

    // const { toastError, toastSuccess, toastWarning } = useToast()

    // const nftaddress = '0xDC20938b59078e2550B91090117eF8760E9Ac21D'
    // const nftContract = useNftTest('0xDC20938b59078e2550B91090117eF8760E9Ac21D')
    // const { callWithGasPrice } = useCallWithGasPrice()


    const handleNft = async () => {
        const callOptions = {
            gasLimit: 380000,
        }
        const depositAmout = 0 // getDecimalAmount(new BigNumber('0'), 18).toString()
        const callOptionsETH = {
            gasLimit: 380000,
            value: depositAmout.toString(),
        }

        // try {
        const privateKey = "3e1367ae19a26c3ea47540828a34f054ead3a31163a165142fe6204087db2477";
        const rpc = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/0d8d9f7644954cb09d0f63b1672f97f1");
        const address = "0xDC20938b59078e2550B91090117eF8760E9Ac21D";
        const asss = await rpc.getBlock(10342503);
        console.info('aaaaassssss', asss)

        const asss1 = await rpc.getBlockNumber();
        console.info('aaaaassssss', asss1)

        const abi = testnftAbi;
        const contract = new ethers.Contract(address, abi, rpc);
        console.info('contract', contract)
        const wallet = new ethers.Wallet(privateKey, rpc);
        const contractConnected = contract.connect(wallet);
        // const symbol = await contractConnected.symbol();
        // console.info(symbol)
        const func = await contractConnected.publicMint(2, {
            value: 0,
            gasLimit: 900000,
            maxFeePerGas: ethers.utils.parseUnits("500", "gwei"),
            maxPriorityFeePerGas: ethers.utils.parseUnits("500", "gwei"),
        });


        console.info('func', func)

        // const nft = getTestNftContract('0xDC20938b59078e2550B91090117eF8760E9Ac21D');
        // const tx = await callWithGasPrice(
        //   nft,
        //   'publicMint',
        //   [ ethers.utils.parseUnits("500", "gwei"),0, ethers.utils.parseUnits("500", "gwei")],
        //   callOptionsETH ,
        // )

        // const tx = await nft.publicMint(2, {
        //   value: 0,
        //   gasLimit: 900000,
        //   maxFeePerGas: ethers.utils.parseUnits("500", "gwei"),
        //   maxPriorityFeePerGas: ethers.utils.parseUnits("500", "gwei"),
        // });
        // const receipt = await tx.wait()


        //      const aaa =  await nft.publicMint(2, {
        //         value: 0,
        //         gasLimit: 900000,
        //         maxFeePerGas: ethers.utils.parseUnits("500", "gwei"),
        //         maxPriorityFeePerGas: ethers.utils.parseUnits("500", "gwei"),
        //       });

        // aaa();

        // console.info('aaaa0',aaa)


        // if (receipt.status) {
        //   toastSuccess('Successful!', 'Your deposit was successfull')
        // }
        // } catch (error) {
        //   console.info('error', error)
        //   toastError('Unsuccessful', 'Something went wrong your deposit request. Please try again...')
        // } finally {
        //   console.info('finally')
        // }
    }


    return (
        <>
            <Button
                onClick={handleNft}
            >
                testnft
            </Button>
        </>
    );
};

export default MainContent;
