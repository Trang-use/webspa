
import '../style/room.scss';
import Header from './layout/header';


const Room = () => {
  const images = [
   
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
 
  ];

  return (
    <>
    <Header> </Header>
    <p style={{fontSize: '30px', color: 'black', fontWeight: '700', textAlign: 'center'}}>ROOM SPACE </p>
    <div className="image-gallery-container">
      {images.map((image, index) => (
          <div key={index} className="image-item">
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
      </>
  );
};

export default Room;
