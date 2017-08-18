{%include file="header.blade.php"%}
<script language=javascript>
function checkform() {
    if (document.mainform.username.value == '') {
        alert("Please type your username!");
        document.mainform.username.focus();
        return false;
    }
    if (document.mainform.password.value == '') {
        alert("Please type your password!");
        document.mainform.password.focus();
        return false;
    }
    return true;
}
</script>


{%if $frm.say eq 'invalid_login'%}
<h3>Login error</h3><br><br>
Your login or password or turing image code is wrong. Please check this information.
{%else%}
<h3>Login</h3>
{%/if%}
<br><br>
<br>
<form method=post name=mainform onsubmit="return checkform()">
    <input type=hidden name=a value='do_login'>
    <input type=hidden name=follow value=''>
    <input type=hidden name=follow_id value=''>
    <table cellspacing=0 cellpadding=2 border=0>
        <tr>
            <td>Username:</td>
            <td>
                <input type=text name=username value='{%$frm.username|escape:"html"%}' class=inpts size=30 autofocus="autofocus">
            </td>
        </tr>
        <tr>
            <td>Password:</td>
            <td>
                <input type=password name=password value='' class=inpts size=30>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>
                <input type=submit value="Login" class=sbmt>
            </td>
        </tr>
    </table>
<input type="hidden" name="_token" value="{%$csrf_token%}"></form>
<br>
<br> or <a href="?a=forgot_password">remember your login information</a>.
{%include file="footer.blade.php"%}