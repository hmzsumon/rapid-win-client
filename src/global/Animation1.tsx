import Img1 from '@/assets/images/effect/zorina.png';
import Img2 from '@/assets/images/effect/zorina.png';

const Animation1 = () => {
	return (
		<div className='wrapper'>
			<div className='adm-space-item'>
				<div
					className='GbBottomPopup_root__xY-4c'
					style={{
						height: '100vh',
						zIndex: 1001,
						background:
							'radial-gradient(23.3% 162.5% at 28.61% -35.71%, rgba(35, 229, 255, 0.45) 0px, rgba(55, 22, 255, 0) 100%), radial-gradient(43.45% 267.35% at 93.45% 0px, rgba(171, 35, 255, 0.6) 0px, rgba(55, 22, 255, 0) 100%), linear-gradient(91.11deg, rgb(36, 113, 250), rgb(51, 29, 207))',
					}}
				>
					<div className='GbBottomPopup_wrap__TTszn'>
						<img className='GbBottomPopup_confettiOne__Jf3a7' src={Img1} />
						<img className='GbBottomPopup_confettiTwo__c8Stg' src={Img2} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Animation1;
