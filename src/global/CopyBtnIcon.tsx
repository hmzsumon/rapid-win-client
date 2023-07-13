import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiFileCopyFill } from 'react-icons/ri';
type CopyToClipboardProps = {
	textData: string;
	size?: string;
};
const CopyBtnIcon: React.FC<CopyToClipboardProps> = ({ textData, size }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};
	return (
		<div>
			<CopyToClipboard text={textData}>
				<RiFileCopyFill
					onClick={handleCopy}
					className={` inline-block ml-2 ${size ? size : 'text-sm'} ${
						copied ? 'text-orange-500' : 'text-blue-gray-400'
					} cursor-pointer`}
				/>
			</CopyToClipboard>
		</div>
	);
};

export default CopyBtnIcon;
