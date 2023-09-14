
import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { CardProps, City } from '../card/type';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';

type MapProps = {
  cards: CardProps[];
  activeCard: CardProps | undefined;
  city: City;
  isMainPage: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
const {cards, activeCard, city, isMainPage} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && card.title === activeCard.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cards, activeCard]);

  return (
    <section
    className={cn(
      {'cities__map': isMainPage},
      {'offer__map': !isMainPage},
      'map'
    )}
    ref={mapRef}
    style={{
      height: '100%',
      minHeight: '500px',
      width: '100%',
      maxWidth: '1144px',
      margin: '0 auto'
    }} 
    >
    </section>
  ) ;
}

export default Map;