export const codeUpdatesEmail = ({
	firstName,
	lastName,
	phone,
	email,
	message: updateDetails,
	contactMethod,
}) => {
	return `<div style="height:100%;margin:0;padding:0;width:100%;background-color:#e9eaec">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_5707931921028922668m_-1201369473283010667bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#e9eaec">
        <tbody>
          <tr>
            <td align="center" valign="top" id="m_5707931921028922668m_-1201369473283010667bodyCell" style="height:100%;margin:0;padding:50px 50px;width:100%">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:0;max-width:600px!important">
                <tbody>
                  <tr>
                    <td valign="top" align="center" id="m_5707931921028922668m_-1201369473283010667templateHeader" style="padding-bottom:20px;text-align:center"><img src="https://ci6.googleusercontent.com/proxy/7QmPuI_NA0kgHJmzh0ho6mOyKop2SeK6WjUbuY9JhUp7DjSSCflvC3XQXFqe--BkxcV3gc5-zex5qeddseiHk3AfDRbDKpkDduMywobCoe-9qlYNuifB3310dlLZyw=s0-d-e1-ft#https://www.eagle-security.us/wp-content/uploads/2020/09/eagle_sec_logo.png" alt="Eagle Security &amp; Electronics" class="CToWUd"></td>
                  </tr>
                  <tr>
                    <td valign="top" id="m_5707931921028922668m_-1201369473283010667templateBody" style="background-color:#ffffff;border-top:0;border:1px solid #c1c1c1;padding-top:0;padding-bottom:0px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                        <tbody>
                          <tr>
                            <td valign="top">
                              <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                                <tbody>
                                  <tr>
                                    <td valign="top" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="display:block;min-width:100%;border-collapse:collapse;width:100%">
                                        <tbody>
                                          <tr>
                                            <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Name</strong></td>
                                          </tr>
                                          <tr>
                                            <td style="color:#555555;padding-top:3px;padding-bottom:20px">${firstName} ${lastName}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                        <tbody>
                                          <tr>
                                            <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Phone</strong></td>
                                          </tr>
                                          <tr>
                                            <td style="color:#555555;padding-top:3px;padding-bottom:20px">${phone}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                        <tbody>
                                          <tr>
                                            <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Email</strong></td>
                                          </tr>
                                          <tr>
                                            <td style="color:#555555;padding-top:3px;padding-bottom:20px"><a href="mailto:${email}" target="_blank">${email}</a></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                        <tbody>
                                          <tr>
                                            <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Update Details</strong></td>
                                          </tr>
                                          <tr>
                                            <td style="color:#555555;padding-top:3px;padding-bottom:20px">
                                              ${updateDetails}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                        <tbody>
                                          <tr>
                                            <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Preferred Contact Method</strong></td>
                                          </tr>
                                          <tr>
                                            <td style="color:#555555;padding-top:3px;padding-bottom:20px">${contactMethod}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" id="m_5707931921028922668m_-1201369473283010667templateFooter" style="background-color:#e9eaec;border-top:0;border-bottom:0;padding-top:12px;padding-bottom:12px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                        <tbody>
                          <tr>
                            <td valign="top">
                              <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                                <tbody>
                                  <tr>
                                    <td valign="top" style="padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#aaa;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center">
                                      Sent from <a href="https://eagle-security.us" style="color:#bbbbbb" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://eagle-security.us&amp;source=gmail&amp;ust=1630853156655000&amp;usg=AFQjCNEZQ7foJETBMbm1LHc3gFbCfUA6SA">Eagle Security &amp; Electronics</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  </div>`;
};
