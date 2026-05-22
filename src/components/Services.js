import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="集研发设计、生产制造、工程安装与售后运维于一体" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="致力于为现代建筑、工业园区、市政工程及大型公共设施提供高效、稳定、合规的消防给水系统" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="7×24小时全天候应急响应与定期巡检维保" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
