// This is a copy paste from https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/components/Register.tsx
// It is now up to us to implement a special behavior to leverage the non standard authorizedMailDomains
// provided by the plugin: https://github.com/micedre/keycloak-mail-whitelisting installed on our keycloak server.
// Note that it is no longer recommended to use register.ftl, it's best to use register-user-profile.ftl
// See: https://docs.keycloakify.dev/realtime-input-validation

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
    const {
      url,
      messagesPerField,
      register,
      realm,
      passwordRequired,
      recaptchaRequired,
      recaptchaSiteKey,
    } = kcContext;

    const { msg, msgStr } = i18n;

    console.log(
      `NOTE: It is up to you do do something meaningful with ${kcContext.authorizedMailDomains}`
    );

    return (
      <Template
        {...{ kcContext, i18n, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode={msg('registerTitle')}
        formNode={
          <form
            id="kc-register-form"
            action={url.registrationAction}
            method="post"
          >
            <div>
              <label htmlFor="firstName">{msg('firstName')}</label>
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={register.formData.firstName ?? ''}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="lastName">{msg('lastName')}</label>
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={register.formData.lastName ?? ''}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="email">{msg('email')}</label>
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={register.formData.email ?? ''}
                  autoComplete="email"
                />
              </div>
            </div>
            {!realm.registrationEmailAsUsername && (
              <div>
                <div>
                  <label htmlFor="username">{msg('username')}</label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue={register.formData.username ?? ''}
                    autoComplete="username"
                  />
                </div>
              </div>
            )}
            {passwordRequired && (
              <>
                <div>
                  <div>
                    <label htmlFor="password">{msg('password')}</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="new-password"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="password-confirm">
                      {msg('passwordConfirm')}
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password-confirm"
                      name="password-confirm"
                    />
                  </div>
                </div>
              </>
            )}
            {recaptchaRequired && (
              <div className="form-group">
                <div>
                  <div
                    className="g-recaptcha"
                    data-size="compact"
                    data-sitekey={recaptchaSiteKey}
                  ></div>
                </div>
              </div>
            )}
            <div>
              <div id="kc-form-options">
                <div>
                  <span>
                    <a href={url.loginUrl}>{msg('backToLogin')}</a>
                  </span>
                </div>
              </div>

              <div id="kc-form-buttons">
                <input type="submit" value={msgStr('doRegister')} />
              </div>
            </div>
          </form>
        }
      />
    );
  }
);

export default Register;
