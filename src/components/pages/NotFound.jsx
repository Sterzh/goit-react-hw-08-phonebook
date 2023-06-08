const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
    textAlign: 'center',
  },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Page not found! Enter another query.</h1>
    </div>
  );
};

export default NotFound;
