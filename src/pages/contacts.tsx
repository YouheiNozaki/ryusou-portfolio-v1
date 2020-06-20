import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/core';
import { color } from 'csx';
import { FaCat } from 'react-icons/fa';
import { AiOutlineMail, AiFillHeart } from 'react-icons/ai';

import { sizes, colors, mq } from '../theme';
import { SEO } from '../components/templates/Seo';

type FormData = {
  name: string;
  email: string;
  question: string;
  submit: string;
};

type Props = {
  location: Location;
};

const ContactContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .showFormName': {
    position: 'relative',
    marginTop: sizes[8],
    "& input[type='text']": {
      width: sizes.largeSizes.md,
      boxSizing: 'border-box',
      paddingLeft: sizes[10],
      paddingTop: sizes[3],
      paddingBottom: sizes[3],
      borderRadius: sizes[1],
      border: 'none',
      backgroundColor: `${color(colors.lightgray).fade(
        0.8,
      )}`,
      outline: 'none',
      [mq[0]]: {
        width: sizes.largeSizes.xs,
      },
    },
    "& input[type='text']::placeholder": {
      color: colors.gray,
    },
    "& input[type='text']:focus": {
      boxSizing: 'border-box',
      border: `solid ${sizes.px} ${colors.lightBlue}`,
    },
    '& .icon': {
      position: 'absolute',
      top: sizes[2],
      left: sizes[2],
      width: sizes[6],
      height: sizes[6],
      color: colors.gray,
    },
    "& input[type='text']:focus + .icon": {
      color: colors.lightBlue,
    },
  },
  '& .showFormEmail': {
    position: 'relative',
    marginTop: sizes[8],
    "& input[type='email']": {
      boxSizing: 'border-box',
      paddingLeft: sizes[10],
      paddingTop: sizes[3],
      paddingBottom: sizes[3],
      borderRadius: sizes[1],
      border: 'none',
      backgroundColor: `${color(colors.lightgray).fade(
        0.8,
      )}`,
      outline: 'none',
      width: sizes.largeSizes.md,
      [mq[0]]: {
        width: sizes.largeSizes.xs,
      },
    },
    "& input[type='email']::placeholder": {
      color: colors.gray,
    },
    "& input[type='email']:focus": {
      boxSizing: 'border-box',
      border: `solid ${sizes.px} ${colors.lightBlue}`,
    },
    '& .icon': {
      position: 'absolute',
      top: sizes[3],
      left: sizes[2],
      width: sizes[6],
      height: sizes[6],
      color: colors.gray,
    },
    "& input[type='email']:focus + .icon": {
      color: colors.lightBlue,
    },
  },
  '& .showFormQuestion': {
    position: 'relative',
    marginTop: sizes[8],
    '& textarea': {
      width: sizes.largeSizes.md,
      boxSizing: 'border-box',
      paddingLeft: sizes[10],
      paddingTop: sizes[2],
      borderRadius: sizes[1],
      border: 'none',
      backgroundColor: `${color(colors.lightgray).fade(
        0.8,
      )}`,
      outline: 'none',
      [mq[0]]: {
        width: sizes.largeSizes.xs,
      },
    },
    '& textarea::placeholder': {
      color: colors.gray,
    },
    '& textarea:focus': {
      boxSizing: 'border-box',
      border: `solid ${sizes.px} ${colors.lightBlue}`,
    },
    '& .icon': {
      position: 'absolute',
      top: sizes[2],
      left: sizes[2],
      width: sizes[6],
      height: sizes[6],
      color: colors.gray,
    },
    '& textarea:focus + .icon': {
      color: colors.lightBlue,
    },
  },
  '& button': {
    marginTop: sizes[4],
    width: '100%',
    padding: sizes[2],
    borderRadius: sizes[1],
    border: 'none',
    color: colors.white,
    backgroundColor: `${color(colors.lightBlue).fade(0.8)}`,
  },
});

const Contact: React.FC<Props> = ({ location }) => {
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
            <FaCat className="icon" />
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
            <AiOutlineMail className="icon" />
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
            <AiFillHeart className="icon" />
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
      <SEO
        pagetitle="CONTACT"
        pagedesc="CONTACTページ"
        pagepath={location.pathname}
      />
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

export default Contact;
