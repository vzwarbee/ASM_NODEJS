// import { Tag } from 'antd';
// import   {useSortable} from '@dnd-kit/sortable';
// import PropTypes from 'prop-types';

// const DraggableTag = (props) => {
//   DraggableTag.propTypes = {
//     tag: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     }).isRequired,
//   };
//     const { tag } = props;
//     const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({
//       id: tag.id,
//     });
//     const commonStyle = {
//       cursor: 'move',
//       transition: 'unset', // 防止拖拽完毕之后元素抖动
//     };
  
//     const style = transform
//       ? {
//           ...commonStyle,
//           transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//           transition: isDragging ? 'unset' : transition, // 处理拖拽中的元素不跟手的问题
//         }
//       : commonStyle;
//     return (
//       <Tag style={style} ref={setNodeRef} {...listeners}>
//         {tag.text}
//       </Tag>
//     );
//   };

// export default DraggableTag;