import type { KcProps } from 'keycloakify';
import Template from 'keycloakify/lib/components/Template';
import { memo } from 'react';
import type { I18n } from './i18n';
import type { KcContext } from './kcContext';

type KcContext_Login = Extract<KcContext, { pageId: 'login.ftl' }>;

const Login = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContext_Login; i18n: I18n } & KcProps) => {
    const { realm, url, login, registrationDisabled } = kcContext;
    const { msg, msgStr } = i18n;

    return (
      <Template
        {...{ kcContext, i18n, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode=""
        formNode={
          <form action={url.loginAction} method="post">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={login.username ?? ''}
            />
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={''}
            />
          </form>
        }
        infoNode={
          realm.password &&
          realm.registrationAllowed &&
          !registrationDisabled && (
            <>
              <a href={url.registrationUrl}>{msg('backToLogin')}</a>
              <input type="submit" value={msgStr('doLogIn')} />
            </>
          )
        }
      />
    );
  }
);

export default Login;
