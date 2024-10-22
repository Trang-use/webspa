import Header from "./layout/header";
import '../style/menu.scss';

const GioiThieu = () => {
  return (
    <>
      <Header DichVu />
      <div className="process-container">
        <h2 className="process-title">Quy trình Massage tại SUN SPA</h2>
        <div className="process-content">
          <ul>
            <li>Người bệnh nằm sấp người trên mặt phẳng, KTV tiến hành massage, xoa bóp, bấm huyệt vào các huyệt đạo vào vị trí đau nhức, kéo dãn các cơ giúp cơ thể thả lỏng, linh hoạt các khớp.</li>
            <li>Người bệnh đổi tư thế nằm ngửa tiếp tục thư giãn bằng các động tác xoa nhẹ, day, massage, ấn huyệt để giải tỏa stress, căng thẳng.</li>
            <li>Tiếp theo là quá trình kết hợp chườm thảo dược, đá nóng. Sử dụng các kỹ thuật miết, vỗ, day, ấn huyệt vào các khối cơ để tinh chất dễ dàng thẩm thấu, cơ thể được giãn nở nhanh hơn.</li>
            <li>Kết thúc quy trình bằng các động tác massage nhẹ nhàng, bấm huyệt vùng đầu, mặt, đắp mặt nạ với mục đích thư giãn tối đa.</li>
          </ul>
          <div className="process-image">
            <img src="https://i.pinimg.com/564x/67/02/85/670285ea8ad976114506bb283f712eb3.jpg" alt="Massage Procedure" />
          </div>
        </div>
      </div>
     <div className="massage-container">
      <div className="image-section">
        <img src="https://i.pinimg.com/564x/6b/a7/cc/6ba7cced31e1fe5e6a5e0f29e8f919d0.jpg" alt="Massage service" />
      </div>
      <div className="text-section">
        <h2>Sau khi sử dụng dịch vụ massage tại SUN SPA & Massage Đà Nẵng</h2>
        <ul>
          <li>Nới lỏng cơ và khớp, hỗ trợ trị liệu viêm khớp, đau thần kinh tọa, tăng cường sự linh hoạt.</li>
          <li>Kích thích trực tiếp lên các tế bào của da giúp sản sinh ra các nội tiết tố, làm giãn mạch máu.</li>
          <li>Kích thích sự giải phóng hormone thư giãn như endorphin và serotonin giúp giảm căng thẳng, lo lắng và stress trong cơ thể và tâm trí.</li>
          <li>Tăng cường tuần hoàn máu lưu thông khí huyết. Cải thiện hệ tiêu hóa và hô hấp.</li>
          <li>Tăng cường sự thư thái, cải thiện giấc ngủ ngon và sâu hơn.</li>
          <li>Tăng cường hệ miễn dịch, giúp cơ thể đấu tranh với bệnh tật và tăng cường sức đề kháng.</li>
          <li>Hỗ trợ giảm ốm, làm đẹp da.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default GioiThieu;
