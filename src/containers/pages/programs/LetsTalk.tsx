export const LetsTalk = () => {
  return (
    <section>
      <h2>Let&apos;s talk</h2>
      <p>
        To request a quote or want to meet up for coffe, contact us directly or
        fill out the form and we will get back to you promptly.
      </p>

      <form>
        <div>
          <label htmlFor='name'>Your name *</label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address *</label>
          <input type='text' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='message'>Message *</label>
          <input type='text' name='message' id='message' />
        </div>

        <input type='submit' value='Send Message' />
      </form>
    </section>
  );
};
