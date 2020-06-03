import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  question: string;
  submit: string;
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch(
        'https://ryusou-mtkh.microcms.io/api/v1/contacts',
        {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
            'X-WRITE-API-KEY': `${process.env.X_WRITE_API_KEY}`,
          },
          body: JSON.stringify(data),
        },
      );
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        'submit',
        'sumitError',
        `問題がおきました。申し訳ありません！お手数ですが,Twitterアカウントにご連絡ください ${error.message}`,
      );
    }
  };
  const showSubmitError = (msg: any) => (
    <p className="msg-error">{msg}</p>
  );

  const showThankYou = (
    <div>
      <p>メッセージを送信しました</p>
      <button
        type="button"
        onClick={() => setSubmitted(false)}
      >
        お問い合わせページに戻る
      </button>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h3>名前</h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="山田 太郎"
          ref={register({
            required: '名前を入力してください',
          })}
          disabled={isSubmitting}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </label>
      <label htmlFor="email">
        <h3>メールアドレス</h3>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({
            required: 'メールアドレスを入力してください',
          })}
          disabled={isSubmitting}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </label>
      <label htmlFor="question">
        <h3>メッセージ</h3>
        <textarea
          ref={register({
            required: 'メッセージを入力してください',
          })}
          name="question"
          id="question"
          rows={3}
          placeholder="メッセージ"
          disabled={isSubmitting}
        />
        {errors.question && (
          <div>{errors.question.message}</div>
        )}
      </label>
      <button type="submit" disabled={isSubmitting}>
        送信
      </button>
    </form>
  );
  return (
    <>
      <div>
        <div>
          <h2>Contact</h2>
          {errors &&
            errors.submit &&
            showSubmitError(errors.submit.message)}
        </div>
        <div>{submitted ? showThankYou : showForm}</div>
      </div>
    </>
  );
};

export default Contact;
