import VERIFICATION_STATUS from '../constants/verificationStatus';
import domain from '../domain';
import sanitize from '../../sanitizer/sanitizer';
import cowcertsFilterAlert from "../../sanitizer/CowcertsFilterAlert";

export function getCertificateDefinition (state) {
  return state.certificateDefinition;
}

export function getCertificateFullDefinition (state) {
  if(getCertificateDefinition(state))
    return state.certificateDefinition.certificateJson;
  else
    return null;
}

// TODO: Better way
export function isCowcertsCertificate(state) {

  let certificate = getCertificateFullDefinition(state);
  if(!certificate)
    return false;

  let context = certificate['@context'];
  let isCowcerts = false;
  if(context instanceof Array) {
    context.forEach((contextObject) => {
      if(contextObject instanceof Object) {
        if(Object.keys(contextObject).includes('cow') &&
           contextObject['cow'].includes('https://w3id.org/cowcerts/edu/')) {
          isCowcerts = true
        }
      }
    });
  }
  return isCowcerts;
}

export function getIssuedOn (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.issuedOn;
  }

  return '';
}

export function getIssueDate (state) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    const objDate = new Date(getIssuedOn(state));
    return months[objDate.getMonth()] + ' ' + objDate.getDate() + ', ' + objDate.getFullYear();
  }

  return '';
}

export function getRecipientName (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.recipientFullName;
  }

  return '';
}

export function getCertificateTitle (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.name;
  }

  return '';
}

export function getIssuerName (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.issuer.name;
  }

  return '';
}

export function getIssuerLogo (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.issuer.image;
  }

  return '';
}

export function getDisplayHTML (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return sanitize(cowcertsFilterAlert(certificateDefinition.certificateJson.displayHtml));
  }

  return '';
}

export function getRecordLink (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.recordLink;
  }

  return '';
}

export function getDownloadLink (state) {
  const url = getRecordLink(state);

  if (url) {
    return domain.certificates.download(url);
  }

  return '';
}

export function getMetadataJson (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    try {
      return JSON.parse(certificateDefinition.metadataJson);
    } catch (e) {
      return null;
    }
  }

  return null;
}

export function getTransactionLink (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.transactionLink;
  }

  return '';
}

export function getTransactionId (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.transactionId;
  }

  return '';
}

export function getChain (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    const { chain } = certificateDefinition;
    return chain.name;
  }

  return '';
}

export function getOtherChain(state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition && certificateDefinition.otherChain) {
    return certificateDefinition.otherChain;
  }

  return null;
}

export function isTestChain (state) {
  const chain = getChain(state);

  return chain === 'Mocknet';
}

export function getVerifiedSteps (state) {
  return state.verifiedSteps || [];
}

export function getParentStep (state, parentStepCode) {
  return getVerifiedSteps(state).find(step => step.code === parentStepCode);
}

export function getStartedVerificationSteps (state) {
  const verifiedSteps = getVerifiedSteps(state);

  return verifiedSteps.filter(step => step.status !== VERIFICATION_STATUS.DEFAULT);
}

/* V1 SPECIFIC */
export function getCertificateImage (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.certificateImage;
  }

  return '';
}

export function getCertificateSubtitle (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.subtitle;
  }

  return '';
}

export function getCertificateDescription (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.description;
  }

  return '';
}

export function getCertificateSignatures (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.signatureImage;
  }

  return '';
}

export function getCertificateSeal (state) {
  const certificateDefinition = getCertificateDefinition(state);

  if (certificateDefinition) {
    return certificateDefinition.sealImage;
  }

  return '';
}

export function getCertificateEDS (state) {
  let sedEndorsement = null;
  const certificateDefinition = getCertificateDefinition(state);
  if (certificateDefinition) {
    const certificateJson = certificateDefinition.certificateJson;
    if (certificateJson.signature && certificateJson.signature.endorsements) {
      const endorsements = certificateJson.signature.endorsements;
      if (endorsements instanceof Array) {
        endorsements.forEach(function(endorsement) {
          if(endorsement.claim instanceof Object &&
              endorsement.claim.type instanceof Object &&
              endorsement.claim.type.includes("EDSClaim")) {
            sedEndorsement = endorsement;
          }
        });
      }
    }
  }

  return sedEndorsement;
}

export function getCertificateRecipient (state) {
  let recipientEndorsement = null;
  const certificateDefinition = getCertificateDefinition(state);
  if (certificateDefinition) {
    const certificateJson = certificateDefinition.certificateJson;
    if (certificateJson.signature && certificateJson.signature.endorsements) {
      const endorsements = certificateJson.signature.endorsements;
      if (endorsements instanceof Array) {
        endorsements.forEach(function(endorsement) {
          if(endorsement.claim instanceof Object &&
              endorsement.claim.type instanceof Object &&
              endorsement.claim.type.includes("RecipientClaim")) {
            recipientEndorsement = endorsement;
          }
        });
      }
    }
  }

  return recipientEndorsement;
}

