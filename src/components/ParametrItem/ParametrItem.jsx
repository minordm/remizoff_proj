export default function ParametrItem({ name, value, unit }) {

    return (
        <div>
            <div>{ name }</div>
            <div>{ value }</div>
            <div>{ unit }</div>
        </div>
    );
};