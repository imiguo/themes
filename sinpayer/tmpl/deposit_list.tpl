{include file="header.tpl"}
<h3>YOUR DEPOSITS</h3>
<h2>Total Deposits: {$currency_sign}{$total}</h2>
<br><br><br>
{*============================================================================================*}
{if $userinfo.username==goldpoll or $userinfo.username==lll or $userinfo.username=="iehyip.com" or $userinfo.username=="yhf"}
{section name=plans loop=$plans start=2}
<table cellspacing=1 cellpadding=2 border=0 width=100%>
  <tr>
    <td class=item>
      {*===============================================*}
      <table cellspacing=1 cellpadding=2 border=0 width=100%>
        <tr>{*------------>计划名单独占一行*}
          <td colspan=3 align=center><b>{$plans[plans].name}</b></td>
        </tr>
        <tr>{*------------>表头*}
          <td class=inheader>Plan</td>
          <td class=inheader width=200>Amount Spent ({$currency_sign})</td>
          <td class=inheader width=100 nowrap><nobr>{$plans[plans].period} Profit (%)</nobr></td>
        </tr>
        {section name=plan_options loop=$plans[plans].plans}{*------------>具体内容*}
        <tr>
          <td class=item>{$plans[plans].plans[plan_options].name}</td>
          <td class=item align=right>{$plans[plans].plans[plan_options].deposit}</td>
          <td class=item align=right>{$plans[plans].plans[plan_options].percent}</td>
        </tr>
        {/section}
      </table>
      {*===============================================*}
      <br>
      <table cellspacing=1 cellpadding=2 border=0 width=100%>
        {if !$plans[plans].deposits}
        <tr>
          <td colspan=4><b><font color="red">No deposits for this plan</font></b></td>
        </tr>
        {else}
        <tr>
          <td colspan=4 class=inheader style="text-align:left">Your deposits:</td>
        </tr>
        <tr>
          <td class=inheader>Date</td>
          <td class=inheader>Amount</td>
          {if $plans[plans].use_compound}
            <td class=inheader>Compounding Percent</td>
          {/if}
          {if $plans[plans].withdraw_principal}
            <td class=inheader>Release</td>
          {/if}
        </tr>
        {section name=deposit loop=$plans[plans].deposits}
          <tr>
            <td align=center class=item><b>{$plans[plans].deposits[deposit].date}</b></td>
            <td align=center class=item>
              <b>{$currency_sign}{$plans[plans].deposits[deposit].deposit}
                <img src="images/{$plans[plans].deposits[deposit].ec}.gif?tag={$tag}" align=absmiddle hspace=1 height=17>
              </b>
            </td>
            {if $plans[plans].use_compound}
              <td align=center class=item align=center>{$plans[plans].deposits[deposit].compound}%
                <a href="?a=change_compound&deposit={$plans[plans].deposits[deposit].id}">[change]</a>
              </td>
            {/if}
            {if $plans[plans].withdraw_principal}
              <td align=center class=item>
                {if $plans[plans].deposits[deposit].can_withdraw}
                    <a href="?a=withdraw_principal&deposit={$plans[plans].deposits[deposit].id}">[release]</a>
                {else}
                    {if $plans[plans].deposits[deposit].pending_duration > 0}
                  {$plans[plans].deposits[deposit].pending_duration} day
                  {if $plans[plans].deposits[deposit].pending_duration > 1}s
                  {/if} left
                    {else}
                    not available
                    {/if}
                {/if}
              </td>
            {/if}
          </tr>
        {/section}
        {/if}
      </table>
      {*===============================================*}
      {if $plans[plans].total_deposit > 0 || $plans[plans].today_profit > 0 || $plans[plans].total_profit > 0}
      <table cellspacing=0 cellpadding=1 border=0>
        <tr><td>Deposited Total:</td><td><b>{$currency_sign}{$plans[plans].total_deposit}</b></td></tr>
        <tr><td>Profit Today:</td><td><b>{$currency_sign}{$plans[plans].today_profit}</b></td></tr>
        <tr><td>Total Profit:</td><td><b>{$currency_sign}{$plans[plans].total_profit}</b></td></tr>
      </table>
      {/if}
      <br>
      </td>
    </tr>
  </table>
<br>
{/section}
{*============================================================================================*}
{else}
{*section name=plans loop=$plans max=2*}
{section name=plans loop=$plans start=2}
<table cellspacing=1 cellpadding=2 border=0 width=100%>
  <tr>
    <td class=item>
      {*===============================================*}
      <table cellspacing=1 cellpadding=2 border=0 width=100%>
        <tr>{*------------>计划名单独占一行*}
          <td colspan=3 align=center><b>{$plans[plans].name}</b></td>
        </tr>
        <tr>{*------------>表头*}
          <td class=inheader>Plan</td>
          <td class=inheader width=200>Amount Spent ({$currency_sign})</td>
          <td class=inheader width=100 nowrap><nobr>{$plans[plans].period} Profit (%)</nobr></td>
        </tr>
        {section name=plan_options loop=$plans[plans].plans}{*------------>具体内容*}
        <tr>
          <td class=item>{$plans[plans].plans[plan_options].name}</td>
          <td class=item align=right>{$plans[plans].plans[plan_options].deposit}</td>
          <td class=item align=right>{$plans[plans].plans[plan_options].percent}</td>
        </tr>
        {/section}
      </table>
      {*===============================================*}
      <br>
      <table cellspacing=1 cellpadding=2 border=0 width=100%>
        {if !$plans[plans].deposits}
        <tr>
          <td colspan=4><b><font color="red">No deposits for this plan</font></b></td>
        </tr>
        {else}
        <tr>
          <td colspan=4 class=inheader style="text-align:left">Your deposits:</td>
        </tr>
        <tr>
          <td class=inheader>Date</td>
          <td class=inheader>Amount</td>
          {if $plans[plans].use_compound}
            <td class=inheader>Compounding Percent</td>
          {/if}
          {if $plans[plans].withdraw_principal}
            <td class=inheader>Release</td>
          {/if}
        </tr>
        {section name=deposit loop=$plans[plans].deposits}
          <tr>
            <td align=center class=item><b>{$plans[plans].deposits[deposit].date}</b></td>
            <td align=center class=item>
              <b>{$currency_sign}{$plans[plans].deposits[deposit].deposit}
                <img src="images/{$plans[plans].deposits[deposit].ec}.gif?tag={$tag}" align=absmiddle hspace=1 height=17>
              </b>
            </td>
            {if $plans[plans].use_compound}
              <td align=center class=item align=center>{$plans[plans].deposits[deposit].compound}%
                <a href="?a=change_compound&deposit={$plans[plans].deposits[deposit].id}">[change]</a>
              </td>
            {/if}
            {if $plans[plans].withdraw_principal}
              <td align=center class=item>
                {if $plans[plans].deposits[deposit].can_withdraw}
                    <a href="?a=withdraw_principal&deposit={$plans[plans].deposits[deposit].id}">[release]</a>
                {else}
                    {if $plans[plans].deposits[deposit].pending_duration > 0}
                      {$plans[plans].deposits[deposit].pending_duration} day
                      {if $plans[plans].deposits[deposit].pending_duration > 1}s
                      {/if} left
                    {else}
                      not available
                    {/if}
                {/if}
              </td>
            {/if}
          </tr>
        {/section}
        {/if}
      </table>
      {*===============================================*}
      {if $plans[plans].total_deposit > 0 || $plans[plans].today_profit > 0 || $plans[plans].total_profit > 0}
      <table cellspacing=0 cellpadding=1 border=0>
        <tr><td>Deposited Total:</td><td><b>{$currency_sign}{$plans[plans].total_deposit}</b></td></tr>
        <tr><td>Profit Today:</td><td><b>{$currency_sign}{$plans[plans].today_profit}</b></td></tr>
        <tr><td>Total Profit:</td><td><b>{$currency_sign}{$plans[plans].total_profit}</b></td></tr>
      </table>
      {/if}
      <br>
      </td>
    </tr>
  </table>
<br>
{/section}
{/if}
{include file="footer.tpl"}
