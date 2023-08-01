export default function App() {
  return (
    <>
      <div className="mockup-code">
        <pre data-prefix="1">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix="2">
          <code>installing...</code>
        </pre>
        <pre data-prefix="3" className="bg-warning text-warning-content">
          <code>Error!</code>
        </pre>
      </div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Voir mes recettes
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <p>Recette 1</p>
            </li>
            {console.log("test")}
            <li>
              <p>Recette 2</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
