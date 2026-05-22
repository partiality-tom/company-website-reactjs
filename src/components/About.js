function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={process.env.PUBLIC_URL + "/img/img1.png"} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            以科技赋能安全，以匠心致敬生命。
            未来，密密科技有限公司将继续深耕流体技术与智慧消防领域，不断推动产品的迭代升级。
            期待与社会各界携手，共同构建更加安全、可靠、绿色的城市消防安全环境。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
