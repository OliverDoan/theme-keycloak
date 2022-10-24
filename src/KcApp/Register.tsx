import { memo } from 'react';
import Template from 'keycloakify/lib/components/Template';
import type { KcProps } from 'keycloakify';
import type { KcContext } from './kcContext';
import type { I18n } from './i18n';

type KcContext_Register = Extract<KcContext, { pageId: 'register.ftl' }>;

const Register = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContext_Register; i18n: I18n } & KcProps) => {
    const { url, register, realm, passwordRequired } = kcContext;

    const { msg, msgStr } = i18n;

    return (
      <Template
        {...{ kcContext, i18n, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode=""
        formNode={
          <form
            id="kc-register-form"
            action={url.registrationAction}
            method="post"
          >
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="firstName"
              defaultValue={register.formData.firstName ?? ''}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
              defaultValue={register.formData.lastName ?? ''}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              defaultValue={register.formData.email ?? ''}
              autoComplete="email"
            />
            {!realm.registrationEmailAsUsername && (
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                defaultValue={register.formData.username ?? ''}
                autoComplete="username"
              />
            )}
            {passwordRequired && (
              <>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="new-password"
                  autoComplete="new-password"
                />
                <input
                  type="password"
                  id="password-confirm"
                  placeholder="password-confirm"
                  name="password-confirm"
                />
              </>
            )}
            <div>
              <a href={url.loginUrl}>{msg('backToLogin')}</a>

              <input type="submit" value={msgStr('doRegister')} />
            </div>
          </form>
        }
      />
    );
  }
);

export default Register;
