import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/core';

import { sizes, colors } from '../theme';

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
    <div className="showForm">
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="showFormName">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="名前"
              ref={register({
                required: '名前を入力してください',
              })}
              disabled={isSubmitting}
            />
            <span className="focusLine"></span>
            {errors.name && (
              <div>{errors.name.message}</div>
            )}
          </label>
        </div>
        <div className="showFormEmail">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="メールアドレス"
              ref={register({
                required:
                  'メールアドレスを入力してください',
              })}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div>{errors.email.message}</div>
            )}
          </label>
        </div>
        <div className="showFormQuestion">
          <label htmlFor="question">
            <textarea
              ref={register({
                required: 'メッセージを入力してください',
              })}
              name="question"
              id="question"
              rows={5}
              placeholder="メッセージ"
              disabled={isSubmitting}
            />
            {errors.question && (
              <div>{errors.question.message}</div>
            )}
          </label>
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
            送信
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <>
      <h1>Contact</h1>
      <div css={ContactContainer}>
        {errors &&
          errors.submit &&
          showSubmitError(errors.submit.message)}
        {submitted ? showThankYou : showForm}
      </div>
    </>
  );
};

const ContactContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .showFormName': {
    marginTop: sizes[8],
    "& input[type='text']": {
      width: sizes.largeSizes.md,
      boxSizing: 'border-box',
      padding: sizes[1],
      borderRadius: sizes[1],
    },
  },
  '& .showFormEmail': {
    marginTop: sizes[8],
    "& input[type='email']": {
      width: sizes.largeSizes.md,
      boxSizing: 'border-box',
      padding: sizes[1],
      borderRadius: sizes[1],
    },
  },
  '& .showFormQuestion': {
    marginTop: sizes[8],
    '& textarea': {
      width: sizes.largeSizes.md,
      boxSizing: 'border-box',
      padding: sizes[1],
      borderRadius: sizes[1],
    },
  },
  '& button': {
    marginTop: sizes[4],
    width: '100%',
    padding: sizes[1],
    borderRadius: sizes[1],
  },
});

export default Contact;
