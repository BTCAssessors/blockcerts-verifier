import { html } from '@polymer/lit-element';
import CSS from './_components.final-verification-step-css';
import { localOtherChain, blockvalleyOtherChainPrefix } from '../../../constants/otherChain';

export default function FinalVerificationStep ({ chain = '', transactionLink = '', isTestChain, isVisible = false, otherChain = null}) {

  let chainClass = '';
  if(otherChain.startsWith(blockvalleyOtherChainPrefix)) {
    chainClass = 'is-blockvalley'
  } else if (otherChain === localOtherChain) {
    chainClass = 'is-local';
  } else if(isTestChain) {
    chainClass = 'is-test';
  }

  // TODO: better handle this dynamic class (cf npm classnames)
  const titleClasses = [
    'buv-c-verification-step',
    'buv-qa-verification-step',
    'is-final',
    isVisible ? 'is-visible' : '',
    chainClass
  ].join(' ');

  const detailsClasses = [
    'buv-c-verification-substep',
    'buv-u-excluded-from-flow',
    'buv-u-full-width',
    'buv-o-text-12',
    'is-final',
    isVisible ? 'is-visible' : ''
  ].join(' ');

  let title = 'Verified';

  if(otherChain.startsWith(blockvalleyOtherChainPrefix)) {
    title = 'Verified on BlockValley';
  } else if(otherChain === localOtherChain) {
    title = 'This dummy certificate has been verified on a dummy blockchain.';
  } else if(isTestChain) {
    title = 'This Mocknet credential passed all checks';
  }

  let details = html`This is a valid ${chain} certificate.<br/>
      <a class='buv-o-link' href='${transactionLink}' hidden?='${!transactionLink}'>
        <span class='buv-o-link__text--underline'>View transaction link</span>
      </a>`;
  if(otherChain.startsWith(blockvalleyOtherChainPrefix)) {
    details = html`This is a valid certificate issued on a BlockValley chain.<br/>
      <a class='buv-o-link' href='${transactionLink}' hidden?='${!transactionLink}'>
        <span class='buv-o-link__text--underline'>View transaction link</span>
      </a>`;
  } else if(otherChain === localOtherChain) {
    details = 'This certificate has been verified, but on a local blockchain' +
        ' just for development purposes, so please, do not consider it valid';
  } else if (isTestChain) {
    details = 'Mocknet credentials are used for test purposes only. They are not recorded on a blockchain, ' +
        'and they should not be considered verified Blockcerts.';
  }

  return html`
    ${CSS}
    <dt class$='${titleClasses}'>${title}</dt>
    <dd class$='${detailsClasses}'>
      ${details}
    </dd>
  `;
}
