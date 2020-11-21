export default function Home() {
  return (
    <div>
      <form method="POST" action="/api/login/">
        <input type="text" name="username" value="admin" />
        <br />
        <input type="password" name="password" value="admin" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
