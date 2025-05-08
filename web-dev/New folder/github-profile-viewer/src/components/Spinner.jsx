import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

//function to render Spinner for when fetching
function Spinner() {
    return (
        <div style={{ textAlign: 'center', margin: '1rem' }} className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </div>
      );
    }
export default Spinner;