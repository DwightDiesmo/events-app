import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

// Layout of the app
// Top navigation bay component and followed by main. 
// children means that Layout will sandwich the body
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;