export default function DropDownMenu() {
  return (
    <div className="dropdown">
      <i
        className="bi bi-chevron-compact-down"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
      ></i>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
