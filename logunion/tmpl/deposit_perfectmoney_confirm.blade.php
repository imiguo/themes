{%include file="header.blade.php"%}

{%if $false_data != 1%}
<h3>Please confirm your deposit:</h3><br><br>

<form action="https://perfectmoney.com/api/step1.asp" method="POST">

<input type="hidden" name="pid" value="{%$pid%}">
Your PerfectMoney account <b>{%$account%}</b><br>
Amount ($US): <b>{%$amount_format%}</b><br>
{%if $use_compound%}
{%if $compound_min_percents == $compound_max_percents && !$compound_percents%}
<input type=hidden name=compound value="{%$compound_min_percents%}">
{%else%}
<table cellspacing=0 cellpadding=2 border=0>
<tr><td nowrap width=1%>Compounding percent: </td>
  {%if $compound_percents%}
<td><select name='compound' class=inpts>
{%section name=p loop=$compound_percents%}<option value="{%$compound_percents[p].percent%}">{%$compound_percents[p].percent%}%</option>{%/section%}
</select></td>
  {%else%}
<td width=99%><input type=text name='compound' value="{%$compound_min_percents%}" class=inpts size=5></td></tr>
<tr><td nowrap colspan=2>(You can set any percent between <b>{%$compound_min_percents%}%</b> and <b>{%$compound_max_percents%}%</b>)</td>
  {%/if%}
</tr>
</table>
{%/if%}
{%else%}
<input type=hidden name=compound value="0">
{%/if%}

  <input type="hidden" name="PAYEE_ACCOUNT" value="{%psconfig('pm.marchant_id')%}">
  <input type="hidden" name="PAYEE_NAME" value="{%psconfig('pm.marchant_name')%}">
  <input type="hidden" name="PAYMENT_ID" value="{%$userinfo.id%}">

  <input type="hidden" name="PAYMENT_AMOUNT" value="{%$amount%}">
  <input type="hidden" name="PAYMENT_UNITS" value=USD>
  <input type="hidden" name="SUGGESTED_MEMO" value="Deposit to {%$settings.site_name%} User {%$userinfo.username%}">
  <input type="hidden" name="STATUS_URL" value="{%$settings.site_url%}/}">
  <input type="hidden" name="PAYMENT_URL" value="{%$settings.site_url%}/return_egold&process=yes">
  <input type="hidden" name="PAYMENT_URL_METHOD" value="POST">
  <input type="hidden" name="NOPAYMENT_URL" value="{%$settings.site_url%}/return_egold&process=no">
  <input type="hidden" name="NOPAYMENT_URL_METHOD" value="POST">
 <input type="hidden" name="BAGGAGE_FIELDS"   value="PLAN_ID">
    <input type="hidden" name="PLAN_ID" value="{%$h_id%}">




<br><input type=submit name=i_submit value="Process" class=sbmt> &nbsp;
<input type=button class=sbmt value="Cancel" onclick="document.location='?a=deposit'">
<input type="hidden" name="_token" value="{%$csrf_token%}"></form>
{%/if%}
{%include file="footer.blade.php"%}

