import Spinner from 'react-bootstrap/Spinner'

export default function Loading() {
  return (
    <div className="loading">
        <Spinner animation="border" role="status"></Spinner>
    </div>
  );
}