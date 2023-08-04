import { connect } from "react-redux";
import { increment, decrement, reset } from './actions';

function Counter({ count, dispatch}) {
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
            <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
            <button className="btn btn-primary" onClick={() => dispatch(reset())}>RESET</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.Middle.count
});

export default connect(mapStateToProps)(Counter);