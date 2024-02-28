import { useDispatch, useSelector } from 'react-redux'

import { change_filter } from '../../store/slices/filterSlice'
import './styles.css'

const Filter = () => {
  const filter = useSelector((state) => state.filter.selected)
  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    const activeFilter = e.target.value
    dispatch(change_filter(activeFilter))
  }

  return (
    <div className="filter-container">
      <label
        className={`filter-item ${filter === 'all' ? 'filter-active' : ''}`}
      >
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        <span>All</span>
      </label>

      <label
        className={`filter-item ${
          filter === 'completed' ? 'filter-active' : ''
        }`}
      >
        <input
          type="radio"
          value="completed"
          checked={filter === 'completed'}
          onChange={handleFilterChange}
        />
        <span>Completed</span>
      </label>

      <label
        className={`filter-item ${
          filter === 'uncompleted' ? 'filter-active' : ''
        }`}
      >
        <input
          type="radio"
          value="uncompleted"
          checked={filter === 'uncompleted'}
          onChange={handleFilterChange}
        />
        <span>Uncompleted</span>
      </label>
    </div>
  )
}

export default Filter
