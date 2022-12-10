import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';

import {useSelector, useDispatch} from "react-redux";
import {selectFilters} from "../store/filters/filter-selectors";
import {removeFilter, clearFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if(currentFilters.length === 0) {
    return null;
  }

  const handleClearFilters = () => {
    dispatch(clearFilter);
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
              <Badge key={filter} variant="clearable" onClear={() => dispatch(removeFilter(filter))}>{filter}</Badge>
          ))}
        </Stack>

        <button className='link' onClick={handleClearFilters}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};