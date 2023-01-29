---
title: Setting Up Self-Signed Certificate on Windows
date: "2021-06-20T09:15:20+04:00"
cover:
  src: https://www.keyfactor.com/wp-content/uploads/1-21-three-men-key.png
tags:
  - Certificate
  - Windows
draft: false
---

Self-signed certificates are public key certificates used in testing
environments. They are not issued by Certificate Authority (CA) and thus do not
provide any trust. Yet they are free and easy to create, which is an excellent
option for testing applications with endpoints over HTTPS.

There are several ways to create a certificate on Windows: OpenSSL, makecert,
Windows Certificate Manager (Certmgr), and Powershell's
`New-SelfSignedCertificate` cmdlet. I will use the latter in this post as it is
built-in in Powershell and utilizes CLI.

To create a certificate, execute the following command:

<!-- markdownlint-disable MD013 -->

```powershell
New-SelfSignedCertificate -DnsName localhost,127.0.0.1 -notafter (Get-Date).AddMonths(12) -CertStoreLocation Cert:\LocalMachine\My\ -KeyExportPolicy Exportable -KeyUsage CertSign,CRLSign,DigitalSignature -KeySpec KeyExchange -KeyLength 2048 -KeyUsageProperty All -KeyAlgorithm 'RSA' -HashAlgorithm 'SHA256' -Provider 'Microsoft Enhanced RSA and AES Cryptographic Provider'
```

<!-- markdownlint-enable MD013 -->

- `-DnsName` flag specifies the DNS name of the certificate. In this example, it
  is set to localhost and 127.0.0.1.
- `-notafter` flag specifies the certificate's expiration date, with the
  Get-Date command used to set the time until expiration.
- `-CertStoreLocation` flag indicates the certificate store where the
  certificate will be stored; here, it is set to the Certificate Store in the
  Local Machine.
- `-KeyExportPolicy` flag indicates if the private key associated with the
  certificate can be exported.
- `-KeyUsage` flag specifies the different operations that can be performed with
  the certificate. I have set to CertSign, CRLSign, and DigitalSignature, which
  indicate that the certificate can be used to sign and verify other
  certificates, CRLs (Certificate Revocation Lists), and digital signatures.
- `-KeySpec` flag specifies the key type; here, it is set to KeyExchange,
  indicating that the certificate is intended for encrypting and decrypting
  data.
- `-KeyLength` flag specifies the length of the key in bits;
- `-KeyUsageProperty` flag indicates the operations for which the certificate
  can be used; here, it is set to All.
- `-KeyAlgorithm` and `-HashAlgorithm` flags specify the encryption algorithm
  and the hashing algorithm used for generating the certificate
- `-Provider` flag specifies the cryptographic provider used to generate the
  certificate.

Refer to the [cmdlet
documentation](https://learn.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2022-ps)
to get more information.

The code above will create and save the certificate in Windows Certificate
Manager under Personal/Certificates. You can export it via UI in Certificate
Manager or execute the PowerShell script below to place it in the specified
`<path>`.

<!-- markdownlint-disable MD013 -->

```powershell
$selfSignedRootCA = New-SelfSignedCertificate -DnsName MPTSQL01,localhost,127.0.0.1 -notafter (Get-Date).AddMonths(12) -CertStoreLocation Cert:\LocalMachine\My\ -KeyExportPolicy Exportable -KeyUsage CertSign,CRLSign,DigitalSignature -KeySpec KeyExchange -KeyLength 2048 -KeyUsageProperty All -KeyAlgorithm 'RSA' -HashAlgorithm 'SHA256' -Provider 'Microsoft Enhanced RSA and AES Cryptographic Provider'
$CertPassword = ConvertTo-SecureString -String "<your_password>" -Force -AsPlainText
$selfSignedRootCA | Export-PfxCertificate -FilePath <path> -Password $CertPassword
```

<!-- markdownlint-enable MD013 -->
