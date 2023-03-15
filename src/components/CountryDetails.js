import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountryDetails } from '../redux/countryDetails/countryDetailsSlice';
import styles from '../styles/CountryDetails.module.css';

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetails);

  useEffect(() => {
    if (Object.keys(country).length === 0) {
      dispatch(fetchCountryDetails(countryId));
    }
  }, [country, dispatch, countryId]);

  return (
    <>
      {Object.keys(country).length !== 0 && (
      <div className={styles.countryDetails}>
        <img src={country.flagSvg} alt={country.flagAlt} className={styles.flag} />
        <h1 className={styles.name}>{country.name}</h1>
        <ul className={styles.details}>
          <li className={styles.detail}>
            <span className={styles.detailName}>Capital:</span>
            {' '}
            <span className={styles.detailValue}>{country.capital}</span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Population:</span>
            {' '}
            <span className={styles.detailValue}>{country.population}</span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Area:</span>
            {' '}
            <span className={styles.detailValue}>
              {country.area}
              {' '}
              km²
            </span>
          </li>
          <li className={styles.detail}>
            <span className={styles.detailName}>Timezones:</span>
            {' '}
            <span className={styles.detailValue}>
              {country.timezones.map((timezone) => (
                <span key={timezone} className={styles.timezone}>{timezone}</span>
              ))}
            </span>
          </li>
        </ul>
      </div>
      )}
    </>
  );
};

export default CountryDetails;
