import "./SAScast.styles.scss"



const SAScast = () => {

    return (
        <div className="video-container">
        <h1>SAScast</h1>
        <h3>Your entrepreneurship podcast!</h3>
        <video controls>
            <source src= "https://firebasestorage.googleapis.com/v0/b/licenta-35e28.appspot.com/o/ttw.mp4?alt=media&token=6da2bbbb-0b27-4643-8958-f23b53e5a8ca" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="episode-container">
            <div className="episode">
            <h1>Epsioade 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi eos esse accusamus aspernatur sed, minus ex iste voluptas illo laborum labore! Laborum aliquid, velit tempore porro illum et accusamus!</p>
            </div>
            <div className="episode">
            <h1>Epsioade 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi eos esse accusamus aspernatur sed, minus ex iste voluptas illo laborum labore! Laborum aliquid, velit tempore porro illum et accusamus!</p>
            </div>
            <div className="episode">
            <h1>Epsioade 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi eos esse accusamus aspernatur sed, minus ex iste voluptas illo laborum labore! Laborum aliquid, velit tempore porro illum et accusamus!</p>
            </div>
        </div>
        </div>
    );

    
  };
  
  export default SAScast;