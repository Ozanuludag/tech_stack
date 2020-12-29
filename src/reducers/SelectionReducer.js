import {selectedLibrary} from '../actions';

export default (state = selectedLibrary, action) => {
  switch (action.type) {
    case 'selected_library':
      return action.payload;
    default:
      return state;
  }
};

/**
 * Burayı anasayfas içerisinde yazıyor.
 * const counter = useSelector( state => state.counter );
 * const dispatch = useDispatch();
 * !Burada const ile aldığı sadece state ki bu verileri alıyoruz.!
 * --------------------------------------------------------------
 */

 /**
  *  
  */