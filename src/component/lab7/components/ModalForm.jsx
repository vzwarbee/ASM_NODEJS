import { Button, Modal } from 'antd';
import { useState } from 'react';
import Create from './create';
import Update from './update';

export default function ModalForm({title, type, params, refest }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {title}
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {type == 'create'? (<Create refest={refest}/>):(<Update id={params}/>)}
      </Modal>
    </div>
  );
}
