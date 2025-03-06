export default function ParametrHead({ name, value, unit }) {
    
    return (
        <div>
            <div>{ name }</div>
            <div>{ value }</div>
            <div>{ unit }</div>
        </div>
    );
};