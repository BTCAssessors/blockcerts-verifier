import {html} from '@polymer/lit-element';
export default html`<style>.buv-o-link{color:#031532}.buv-o-small-text{font-size:12px}.buv-o-large-text{font-size:15px}.buv-o-button-link{display:block;cursor:pointer;border:0}.buv-o-overlay{z-index:100;box-shadow:0 0 30px rgba(0,0,0,0.25);background-color:#fff}.buv-c-close{position:relative;display:inline-block;width:50px;height:50px;overflow:hidden}.buv-c-close::before,.buv-c-close::after{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#000}.buv-c-close::before{transform:rotate(45deg)}.buv-c-close::after{transform:rotate(-45deg)}.buv-c-close--big{transform:scale(3)}.buv-c-close--hairline::before,.buv-c-close--hairline::after{height:1px}.buv-c-close--thick::before,.buv-c-close--thick::after{height:4px;margin-top:-2px}.buv-c-close--black::before,.buv-c-close--black::after{height:8px;margin-top:-4px}.buv-c-close--heavy::before,.buv-c-close--heavy::after{height:12px;margin-top:-6px}.buv-c-close--pointy::before,.buv-c-close--pointy::after{width:200%;left:-50%}.buv-c-close--rounded::before,.buv-c-close--rounded::after{border-radius:5px}.buv-c-close--blades::before,.buv-c-close--blades::after{border-radius:5px 0}.buv-c-close--warp::before,.buv-c-close--warp::after{border-radius:120% 0}.buv-c-close--fat::before,.buv-c-close--fat::after{border-radius:100%}.buv-c-social-share-link{width:17px;height:17px;background-size:17px;background-image:url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3My45MzIgNDczLjkzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDczLjkzMiA0NzMuOTMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NS41MTMsMzAxLjIxNGMtMjcuNDM4LDAtNTEuNjQsMTMuMDcyLTY3LjQ1MiwzMy4wOWwtMTQ2LjY2LTc1LjAwMiAgICBjMS45Mi03LjE2MSwzLjMtMTQuNTYsMy4zLTIyLjM0N2MwLTguNDc3LTEuNjM5LTE2LjQ1OC0zLjkyNi0yNC4yMjRsMTQ2LjAxMy03NC42NTZjMTUuNzI1LDIwLjkyNCw0MC41NTMsMzQuNiw2OC43NDYsMzQuNiAgICBjNDcuNzU4LDAsODYuMzkxLTM4LjYzMyw4Ni4zOTEtODYuMzQ4QzQ3MS45MjYsMzguNjU1LDQzMy4yOTIsMCwzODUuNTM1LDBjLTQ3LjY1LDAtODYuMzI2LDM4LjY1NS04Ni4zMjYsODYuMzI2ICAgIGMwLDcuODA5LDEuMzgxLDE1LjIyOSwzLjMyMiwyMi40MTJMMTU1Ljg5MiwxODMuNzRjLTE1LjgzMy0yMC4wMzktNDAuMDc5LTMzLjE1NC02Ny41Ni0zMy4xNTQgICAgYy00Ny43MTUsMC04Ni4zMjYsMzguNjc2LTg2LjMyNiw4Ni4zNjlzMzguNjEyLDg2LjM0OCw4Ni4zMjYsODYuMzQ4YzI4LjIzNiwwLDUzLjA0My0xMy43MTksNjguODMyLTM0LjY2NGwxNDUuOTQ4LDc0LjY1NiAgICBjLTIuMjg3LDcuNzQ0LTMuOTQ3LDE1Ljc5LTMuOTQ3LDI0LjI4OWMwLDQ3LjY5MywzOC42NzYsODYuMzQ4LDg2LjMyNiw4Ni4zNDhjNDcuNzU4LDAsODYuMzkxLTM4LjY1NSw4Ni4zOTEtODYuMzQ4ICAgIEM0NzEuOTA0LDMzOS44NDgsNDMzLjI3MSwzMDEuMjE0LDM4NS41MTMsMzAxLjIxNHoiIGZpbGw9IiM2ZTdlOGUiLz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K")}.buv-c-social-share-modal{position:absolute;padding:38px 34px 34px;width:120px}.buv-c-social-share-modal__close-button{position:absolute;top:10px;right:10px;border:0;width:20px;height:20px}.buv-c-social-share-modal__list{list-style-type:none;margin:0;padding:0}.buv-c-social-share-modal__list-item{margin-bottom:24px}.buv-c-social-share-modal__list-item:last-child{margin-bottom:0}.buv-c-social-share-modal__link{text-decoration:none}.buv-u-visually-hidden{position:absolute !important;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height:1px !important;width:1px !important;overflow:hidden}
</style>`;
