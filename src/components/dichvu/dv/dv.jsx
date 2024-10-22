import ListDv from "../listdv/listdv"
import "./dv.scss"

function Dichvu() {
    return (
        <div className="dv">
            <div className="dv-text">
            <h2>SEVRICE</h2>
                <p> Trải nghiệm không gian thư giãn, tinh tế với
                dịch vụ cao cấp tại Chua Spa</p>
                <div className="text-dv">
                    
                </div>
            </div>
            <div className="dv-container">
                <div className="dv-main">
                    <h2>Bảng giá dịch vụ</h2>
                </div>
                <div className="list">
                    <ListDv />

                </div>

            </div>
        </div>
    )
}


export default Dichvu