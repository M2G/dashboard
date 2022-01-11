function Signin() {
    return (
      <div>
        <h1>Signin</h1>
          <form action="">
              <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>

                  <textarea className="form-control" id="exampleFormControlTextarea1"
                      // @ts-ignore
                            rows="3" />
              </div>
          </form>
      </div>
  );
}

export default Signin;
