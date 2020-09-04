import { hasToken } from '../auth/auth';

export const closeReply = () => {
    let gray_out = document.getElementById("gray_out");
    let reply_popup = document.getElementById("reply_popup_container");
    gray_out.style.display = "none";
    reply_popup.style.display = "none";
}

export const openReply = (explanation_id, setExpID, isAuthenticated, history) => {
    if (isAuthenticated || hasToken()) {
        let gray_out = document.getElementById("gray_out");
        let reply_popup = document.getElementById("reply_popup_container");
        gray_out.style.display = "block";
        reply_popup.style.display = "block";
        setExpID(explanation_id)
    }
    else {
        history.push('/login');
    }
}