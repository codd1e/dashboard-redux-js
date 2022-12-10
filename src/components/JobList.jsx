import {useSelector, useDispatch} from "react-redux";

import {selectAllPositions, selectVisiblePositions} from "../store/positions/position-selectors";
import { JobPosition } from './JobPosition';
import {addFilter} from "../store/filters/filter-actions";
import {selectFilters} from "../store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => {
    return selectVisiblePositions(state, currentFilters);
  });

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(position => (
        <JobPosition
            key={position.id}
            addFilter={handleAddFilter}
            {...position}
        />
      ))}
    </div>
  )
}

export {JobList};