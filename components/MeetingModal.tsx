import { ReactNode } from 'react';

interface MeetingModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className?: string;
	children?: ReactNode;
	handleClick?: () => void;
	buttonText?: string;
	buttonIcon?: string;
	image?: string;
}

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	children,
	handleClick,
	buttonText,
	image,
	buttonIcon,
}: MeetingModalProps) => {
	return <div>MeetingModal</div>;
};

export default MeetingModal;
