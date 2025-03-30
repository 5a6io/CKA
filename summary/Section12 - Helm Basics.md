# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4745SW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCkxLamMYloHMnmFjiKIJJ0q%2FiCMt5qgTe9Gq3bVQz3hwIhAOlhtrr%2BMdRUsW%2F19XP3Stkeetr7JZxOBES%2FdZoZe6rZKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rv1p9KIIO7WIHCEq3AMM6iwdBr4720z%2FWaixI7YWXbAZPgzTuXshG36b1qPP9aaSIany8ylXZBU731nRNK8Hovy0v1%2F58S3aOGjusj%2BwA%2FHFg8HBZCYkRajsE%2BWhyN%2BuqqVwFqlhVNYs7iOMJPIkftxnHEqVc34qUvZSIm2dp99OoJHlpvbv%2FPUv8wgv1A6tzLS8vhemKUDnoVMgoSt6ihOrTIbRch94wPaxvSq0rlYVEgIYO6Hxi02XQAniQHe7OboIB83oLlxUO8SZej2n6K0wXeV%2FMMWJO7L94Tvl7AOMV3y7VDLKfcp2C49suF5MZ0du5yCP0iA3zegT8eK28rUHIe2wWuGzxSsFN0zBOPRlyRfbYKV36ewHzejArrjNHkoZttH3KE%2BH0sUDmFMlcwXmO6RiUCdL36iDojs8wvA6o8lAp2bc9FqEq4XTxqXlhcyMGJWr%2FrI5n3FoWew6sTlf%2FXH%2Foez5u9y8Ma6Obl%2BYIni5bU9%2FewuLWi2addnNz%2BORlLBvPbCfRmnx9WbKW38fTmuTG8EXvU6Hq%2BcRymTqfywn1i5sOtOulfisMLVDunAYIqNzdRpn9%2BlPY2X7wxjwCVLeKUqEiRtZYp8ZgBCrZmVRiNVKU8wed51vLm3pCPYOBNFH7bcNFTDri6W%2FBjqkAW2NBuhthPiRYzXwl5v9gtCMO%2F12ycvOvGDnwG21YxGJSxuixPan0wyK%2BZXtisIjVyA918yveNR%2BRVcFuonmZS89tkRfuJKb8feClxWAZ5bu3g75LFLVI0XMk6NhCgywgcShimC7IL1URlUkI9bHi%2Bfnd6zk9usa%2FkNTxCJZQUxtHDu81MfCI73tuKkF6v8%2FECRuDQGFyCI4LfWBDpH7M68UJ90n&X-Amz-Signature=899c7801a39874220b6a669191cba5e528feedfbabbaef408a1d72a4c329e46f&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLO4VQZK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBPriZmJTYmvbiwPmcjghHSY%2FYnRFfA2nFaATko0PMilAiA1LZAATgkMf58BmLae%2F83ibfKpd0vvF0Ntd9S07DzvMCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRADMSJfPWQDm1LHIKtwDxi%2BUONtimYqrGlZgNhlAIQvqX6DHANlVCI16nrvWQ429ZseqJUfM4v6zw9TQKjXyaZsmFTN4Zn0p6WG%2FB%2BP%2BM5fXkqr9Ewitmu%2FMSH6neUMCe0yDhi0zPWNFvtvTtxZrz6Pz0XUdEf4FZdPyK7sRJJftejCaVx%2BIgtmtzQI%2FjR6GcqdMrwHA1sIHECb6v9yKM4%2ByHNVmlq0D0w6e%2ByWog0A0DtGh9T%2FXjeFODwc43g31a1stc2XCSZeyPJimo6YdWMvAYhczzg6zI%2BJ36%2Fv0%2Brsd%2BtJnkCPal06A99EDx4AVmztNBF0N2EiFPGPPH4D4dKldSb5phzZQmznDMpwAD4lw6jVwyUfp2lnQida6Hd8xILQqfVs0UvX52T6N9s9kmUQdvmIgBKzd1B3VZERtojBVHsiEZWhl4qOTI8oIGCnFSPQnhZ4fZp6wAUxQ51Bolz%2BuFZTB6GIH%2BNmMqWXe3MEosoLWeiC2mQkIt%2F1UF5jo%2BpBICQILkEvsofRE510ul2LAduRrffZ1VX0pO%2BaNpsngdw77kztcqj1c5KBDM7nl5Yw72aQJzAE4MgOXircSOaFZSUvZiH13buzumxywooHnavXOjEvJny0cPKM5WBtXBOOzfnZg4meHt3gwoIylvwY6pgGfMowsAk0j5B3ADtwOxVDGolFtd29X%2BcWPPaDl%2BGpf%2BwMZ9foBEBzmsiBLDBT5MOR9MR1A3kv%2Fc7BsZdXYTT8FyLlHMz5yq4y4s%2B447I3vFwZ02uXc1o6nWrvHKDSKHrISB63eddxkJht%2B44BnQkGib6Q1nznfbw00ACOTybgXyGSgpRRiasUuyHcz5hupiyItoZgulrDu32VXo09MUD0XyAfBJSxs&X-Amz-Signature=0077665bc52728e2b1586b5f1038683df5b7b0c927094dada7fb2ba080f5f164&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4W2GK5Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEspS97T3lBYiqp9GLls3LRI99yi8nSO9i16gZ0ObAt5AiEA2x%2Bc5ClGTl6XedxZ0%2FLeWcg2vbxxf%2FF4AjO1EouKTMIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTK7A1qgow0xIXC5ircA%2BA6y6ok525KV9C1yGEryC7QvGWAEuekRKjcZ763gg1TuhJAJO555B2U0LkBbIiLlW29OW%2BZzqQGARwacWwOTy8NsLgSy9qJubGIFsPEmyIau9xE6BO3AftzXqU%2BZY0DTQK7bwe6Lsh8CKYVfDAabx9QFEHSS%2ByzQgGOCQsF%2B0gYaM%2FYkVxpStFOkXtpts1SNXjEQKk1xwBrvoWbyGQx2TWta8dWAJaT5D1%2BvDXDEPoMjlddUIwhgHufPRbdzxr2ZvuLNTLwAdanBi5kHSAVXpQ8Kx%2B2zoElNv%2FBQWvJTwqhbFeEvIuJdaXIaJCVqtHOGPYTEv11Nwh2CVlObC5oxtSl87sLOGPQuoMIUL%2Bcv%2FEaxUFTt4OJS%2BbGb%2FYO6zIlopGx1VFPEMEyvFnY3hONsU34dvOZ9PkeUVBLXPyXXpKcxlhAAp5AiwKJ%2FfdNaMefKWMOJg0Qp5XdsLIZ93AmD0mTL0jsTjzwcNDpGKYH%2Bn%2BtJl27Y0qgL1f7C2eCfbYoj8EH1B4a%2B5KNkjyj32C6%2FN5Tv%2FioyCslPxSCFAcIdnKKc30o7AYtplQxQJpBo5rFajkD3EG6U9WreJ%2Fo7%2FsfCQIsg6M%2BBL1T7QZ90nhUzOA0wtAt6EYANpBgJBpjMMyKpb8GOqUBlnYs%2FcCd6ULvWJuWQV0kv0GIIGMHNFnaiONRaGfqFk0beSTj1VC7NV2czD%2F0%2FaE%2FXMDN5qlvje%2Fo8gDzscvkrm%2BALOwAcLTrjnRGX0TvZv%2FB%2Fv%2BtE3Qrx%2FLgv6Y3hVuInWeQUhaoiCywI9203zkH0CPrfNy4Pa64A8GZ9ji2Dyqm8yLI1dhmFbIayWU4hSpADu0Qrbl%2FaGJrkO1f3mu4ePsArSZR&X-Amz-Signature=b4e0eb5194aa0e72b10dd4ead44fd8cdc5c3555667f011f8f9ae7be5614be07b&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABKVJZ7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDm3uqlpu5df%2B27VnbpYNocj8SoP5xSqtZ81vkpH6Q%2BxwIhAPALKkf1GSwVSxHS%2BgHmmiAm1RSjTcznyIj7b8rmQ%2BCrKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw98jRwTEmRCs2b4ccq3AOna1L%2FOR3naOJ1QUmvQVZOCTfNmAMwQNHjbMIPSXF95PqHu50ctBqaOggq%2FNu1yYef1LW%2FhhWs0j6l7z7%2BzjfJMYbNpOVZ8%2FdPI2GYr%2B%2FoDDGagCVno8fHQHmH%2FgYu65%2FbJLeQTwm8E1xNuwcg8Kujv9KIivYTB79%2FMkt7GJc%2BuePWEyzXsdn%2Fh5j8dzqbfpJ5jNOQfmIS2pCuQL3Kgc5hwdW3JBRfwo6%2FkJ2nGWzxguO37EH9epiN8xXVDZS5dg%2FdSEai9rzug49M6Y5i%2BjZB8L6CWwrecYcCUrOegBINuiGnOPPWhjECWZJMQ7OKiYbeAq%2Bl3De2PxtZoDSrtZheb86J4zV%2Fon%2Bd1ogjHB%2BaZCjg6rZPVC%2BXiDvI7N2HrH6DSrEEUl2qA1iofC8vpRlxnvM8V13ZhS5dZ25pbYYoClasQ9MpmkWT0w3SxYCKgu%2B4P67rEzAKYaS9rxgxZ1lNYBHVRDKhMX%2BlyPTVkWkeedyjXgTMa71TPyogEfpTWHsmbS1QZwCkfT9UiIJke8DF%2BsAjxaVb6lLfxmDJvawygwEgLPzb%2B1NsrO9ngkCT4uNPvuWfNPmwWc7C0%2B73%2B1QlfnqDznQIgGGZ7Hg8xQfDismVCgoNWyCLklpQ2zChjKW%2FBjqkASziHFEp5IbwZpNWj32E69fp%2FbdHYliB0OkXlSL4M7g%2FfAnFlqKxWf%2ByFKjd6EFF3hZnZpfvZ4vTbXrKoGFiYW6Z56%2FUqv0%2BOgmoVAMkbslXeqoKYUkK7uakwuCBbECQXLiWWU1THgkwwBf76KgNr%2BXMUKhSLZsM8%2FZXLn%2FgPLK5uTY21T7ojiUS0p2YMMBxk1yUIEu042XcqXUcafR6sd09RovJ&X-Amz-Signature=01eecafa4402e584cb2b694116b6df4050eb37eb62301d22c0861dcd7a06a8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3CCRRZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD9gwQyRH3XJTRDCHPa7df5ir1FGROjdolugAAZlPpyoQIgJ%2BjvrfO3d1eko2M%2BNAOBALYrkNYooe6ixQAE2k0y3w4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDQu6ogcPAYJt1IGSrcA13z6cXyfJ04DpFO2mCLHijNRYKvXGAZ2PSJjboQZPywgsDqs4ddhnlx%2BDG3zM0YDbKxEMuRwh6lVNoevYHmGVN14YVOvDthZB41XWDm0hnt34tod0H6QUAHP2GzC%2BeqZR%2BUqW1zAMsQ65t%2FxrgKcGCR%2FQwmNDHqHB75peh8rzXQughM5MM4vq5gHFi7qrZCKlIKS35mE8jQs3oikJJPpVhJdZLcCErQyPdS1nlML3MI79MCs3VlJ%2B2BbrKV5QjzylJZMdgrS3mc5Dj%2BnMi67p0VPd1%2B0q64l6Y6OeH9N67%2BSU6Wo%2Bt1A3fxGL759bMJVYWsA9UvtYVHvtS76DKhTtZuu2ww5j8IqDVhpLu%2Bf%2BEGzxJYFbIRnoioxPF1b02HU%2FrZNL3jboNSfXeB8dDHHiyvEuLVoYsehQqIfiq%2B971wzt%2FsJFSyCFmRtKlhtGtcPxnLFGyp4GVZU6LaWqO63y2WVqnsvLqK0komv4km5aAd6oL3AVWkUCaXwOiDzaO0xh8RG5BIMxUuSBieshYuYKPKjGgjOSpNOro%2BIAchaHrIF0Kd3iAhVNHuGpEc4PziiqnDAboY5qMbz81JNtOPqLNHCfnz%2F2Sb%2F4PepZqjWJe7rpIRWh4CnAXqOJqzMNGLpb8GOqUBe%2F0Az6jDXDN%2B6nDHZuvT%2F045xKMaiKT4%2B%2B7h7WyAoMjIQN6UK%2ByT2bdJc63JkzTfMu7DFKklyUcXRQ5Y7ZZ2cvXMBv0wmycI9afB2TW7zNERwdNysEdNJqI4bYwTJm5UHFllu7bXJUGwGFPjpkKYHUzuh1MXe23LJDBhLF76C1kaO%2FDZSZjDHAWkjENRjAkvNKZv8ZVzdkb8iZ572FPGUxKjhMha&X-Amz-Signature=d67ce2927fcf4803b1f66a7775a11a4fb25a52d019d780c9f024cb70da587464&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYKIGWN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDGLUGuLV6MjQJtPALOPxAbFMqep0%2FROOLrMSS%2By9eCsAiBx377ULIBP8FlKLAh%2BRpMGAih%2BteRVmP6HL%2Fg8TnTtfCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGugweVsKZAr2tz%2BWKtwDh6SO6raIfXy1%2FaFdRbTIqtGgM6RIKJeQhqX%2BTkJLeV903tkGdHShkXuNg3wpO8w2%2FMKVi4jgiCQDehoY6PITcz8lhUXIdpspPPfFsIjYIaI8SUTsEMUCfCH82%2F3AuDCOnh3CYjkdbuktW1YnYWoI3dLH%2Fhf8WreLga%2FCdBCPq%2FrxP0kpHS5lghNkGwr2c5oCPzpgwu2a9lMutgeQA3LMAS7zc4XViFvZuCzzgCKL9l69a0rAeXMaQWfYtH09heGdNVA%2BN7Z%2Bk4ZqVcUmKjUwh7Adpk%2FKoZai1KIMWMszVoSn2toCv3OEi516i4WzNnu0or9UtRayMQgJ7tZbJ7TT6xTRtt9zZ0%2F8Vbmy4WiyTEpACaNLTYuN%2F32VybScBZmOVlH%2BK8OEaMIYCBf8uP0WdAfRZid2E5yPAPZBQrsVz8Uv4By6FvlMP6M5S1AuAODS640RUo77NuwMsrvGMUBIZrLsxPzXX5pgAYBYw0h%2FuC0yfNkOTEca4XTIbcQv90FQ3sQH8OB1oYuHMhAGQFBjK9n4F2tMSI3rK4kYhoRiHpgLVlLvBSjtO0%2BeNRfOgz597%2FrDTMyR3XpKjldFKGaCe1X2uGBLzDC8A3AfMlYhGBnjh%2BecqipFt39XSPIw6IulvwY6pgErNJD4dP5ogVL5%2BFawTum97Sb3P8ok3AaIUVO9zWdFVFzYBmz2YJQfaNjoDMUx05RxS2Xxz8nDtCZTzGOGJBwlBkUAdjat%2BJS2gUQ7PPRLzlXts5c%2BESxQacB4iv84c0TucyMm9eBusranXS3DM8JBos4%2Fe%2Fapd1bGYvRwLY9PV4t%2B6RyVlDUjuONPzdLrIvHXHwsBbTDXqJZ%2BZv4He4BveQMBWYeW&X-Amz-Signature=1fb9629ce703824848bdaceb09b622de9b152adffcca6f95e7b763804155a497&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKZ7TGY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCUIQ6ATURZXuZex0I4%2FLcGrV9wooYgr8DlkkJcgXsTNQIgBTF6QH4MNUG4sgQ32p8n8N0GMV4kGzBK%2BwZpLM8qkNQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9tKYKhD%2F4S5Rdb2SrcAzEYmC6gILjACkSPwbEtqNGzj6rbmuVTTWELTsS7vihM2rnXBRw%2BPfPESy1dsNvPrWiEo24f3K638i9Xf4YsHLbLP%2FXFU0SjUY10PbqgAVgjOMmvZ7i4FIHfdsU%2B6LWpuqqG%2BwKHGRUbmLqST8pLKbQXO7xFCE6XRtT%2B%2FnDYwvx1JvVe8M3hH2nTg4%2BENSwDbRRd%2Ft5ChozzthMEx7Ej4l6MRcI5xUC%2FAW99nonZgIb%2FRRma4Sl%2Fq7Y0wX5opMkETrmkCkhT%2BIZvybcXoS%2FGNJePnKS9s8oIBusTvmW5%2FaquHOwPOMeoTxmoZyhdCtg5QBULMHKTclgYW9EOdEvOCnZR1K0rSLuR4Ze3gt9CwBr%2Bmwd%2FfkCTWvVS2FMosadf101doYnOV004L09PpJGWpJP4YM2yb%2FF%2BvOcpbCWgVKKWDjCy9XMLTMPNxRgI2jrR%2BzdsLp8XK%2FHKGWkxHZ%2F8l0dhSqMraVWabXbrlRZebfO1F3ayyB7IlMuYl3OOk%2F1au%2BZcAEy%2F3%2FV1C6%2Fo32hnR1EmAXE77RZxjkZeduI%2F2vrz7f6TJ%2BNQgnG1o68YBjyVVJxBF3G0PR5wd1AWArbzgJlMQUgqjMw%2Fu0X4BVUgH%2FQjpeYgMr5iRKPWIx54MKGMpb8GOqUBgPUVbeqJyMJm6AZSxsHZRRepqcUwHBaw3l3iDnP%2F9EEnDyY6Q4OvuESU%2B%2BtmflJTNQXkS53dXOJqjo%2FQfR2ci%2FIL0eF%2B6kVyLHwUtkteX84xalSjjWtL4iC44FbRMowOcLF216fHX2iRaFp04iH9rOnQtLOZtSs1oYTdQzxtxKeEW1%2FfjU4DD%2F5mGpK7a9af%2BQ4D6PPb53%2Fy4aUYaA%2FOyZ2Yr769&X-Amz-Signature=4ebbfb1c5fab16ff4423a3920467501942e68c907e4632d0cf5ef978fa5ee442&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN7WI6E%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICrrR4xOyJJjtulIIOtEBoTEuHOrHdIQhgbbs1ZtZC6tAiAcTkuAfskPwMDlqn%2FiAXy3mEJekadq%2F2uIvkvMN%2BFRhSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFUxmnTS7nDfr%2BjVxKtwDOPAXs334xJJGADnd53uvfFQ6C4zQcTn5n3Pk5czgmPYEDrsAFqJ9vaZCuakAZffdfrLKpYvIjxSPt7lE2%2FoNRGQ%2BSvEbQG%2BiI0cYuJJ8lbY0OuiG%2BGnJgzKWQVCeM9jyeaHK7Yo0xBYPXpsEcEbx%2FWkarntSQJ6jhllB8SBFdsyhdNaiZnlh8XQdQcUZOYDmKe4ulwU4ggIR%2F6Fjsfa5rAUmF%2FQ5s0WnDeeDLKds9LYVjTeYimOsi30ZLJVCPxASaJ3ipP3i9RX53bv888Hr1e8%2F4Ozq2%2FnT5P%2B27ulRtwLLode%2B6yq2KysfNeqy%2BF0aJPrYKt6zSY9MY5L%2BKoFqqeNDcHmpTcgtnKxmg%2FAt71hmuygvowK1SXwebMpkQsRIY0EqgFrnMQu3i6GBKhRxLKGx9DQYICv9yrUPpwX%2Fcgd4E3Qq1Za9ulymUOOcUsCEXsaRAOhaZZQH0nNdVxRk5pZ%2BnoIJl9%2FLy0NxOICjDnmFTbvXuLf%2F0cfEMctBNaiIvV8V7yDdr%2FMy%2FF5V6HqrlyukNEomjQh5oqnYaJvnGx8RyJvvFw0xaBYnNdaxg%2F%2B8O1Es4fP1GY%2Bb7ASzzbNMPfNJo2B1VGYVJ%2FssztRz32UgDehLhGPzPBsqycMw6IulvwY6pgE%2FZt0cfmhKAM0WfPqIbZppUj7DrE2pOCbqGccmzrZZFmjFKJ5eHqrG1dpyGhzTc%2BMZnZ2A1eYvzPH6gWuBiIkN%2BPM6y6Wm421cKD5e13%2FLAVCoR%2FmqCA%2BlQDthPsXKUeJ1HB1Syy0qCFXd0F%2FJU6r9F9Efj5QwmzAQUhWqb6eNavA%2F3PpaQG5xiXQ%2F3mkJgR%2BU11R0qxkNL%2F2SoO0cbyjQEKbqwGAf&X-Amz-Signature=36c837561d17c45ab9093820a00b6d9fe026c4b82c52d9b23adb355be3c7b0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMNLQAP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQC5C4V3ltqG1udbZ%2BpZ1nxBDesztQfm%2Fpk6gIRehyN37QIhAMuHkubIOXKXPahgHEEQ83PTyQSAZC8UKYsa2ZCkb%2F43KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVOQKPXSZgTPtKTfAq3AN11JABctch3ZgWIQ5%2Fy1hPUZV3lM%2BsnBXHoPXbrxEBgdCLO6lRwR9xAbH%2BMmd5T%2B7UofTglOazIcdZzNRXTRaXoCMuixdX1yHTppD58AIl4o1gMdVKczIAXShL%2BYYGkZwWrJRSgWQ8XOnPIGJ2%2BDUbrPKhzCbHatLDqDUUHYNAuwxuykjelm6qJjSZenhpjrSw%2BfgMIKHA3wOnCHEjlQ9sZUsMKL0DSo4%2F77xSjdpuK%2BSpDdrXmMRsHS6JqFg1N4HW8mwQD5hrqgOKo0LOodoJHRZQyPKtGI%2FO%2BzEgZofnhJr1N75bj7KK74kZcUdNmUiDKfs8mlWCZWU9xap4qjCNqqGGNGVwmhWshRA5ucLc3uTTCYPI5ioDx%2B%2Ftc%2FZ%2BtvPrQNzupZqHNY3tGzaaB3qkBOzmCH9lSqtI%2F04%2Bl0RFrnubWeGHPQ13AafooIWBYMtJ0gdYGKln6liE1A3Atp4f00WCTyJe%2FO%2Buw8zavRFal3itGRSkrX%2BPcSMmMsfD99juCi460%2BSKlwXpzLoCoJGxd%2BAjE1HZwFXAkCTmgpqYhJ6wwy8SrlUdEbLNSbeAK0qF3k9JgZ5%2FwoWqAQL4zc%2BDx7ffcSbOvex1d5PMLzfNztV3inOX%2BfBge1omtTCMjKW%2FBjqkAc34DCU%2FRAJyOex7LOZETj7iUsfp7plWcoZJWwn0jsEUw2vigWl3%2BtDIzj2aLRiKYd7ejBl9z%2BSKUh10VlSs2EzpV6UlpvOGCpQZaW55mTZx2PRqCYFW52%2BNG2fa0RlzNCeTXCI9neWS3gpfHgqz48gdaofxQSyIPlWfSvTHUDqCekPpEd0eWN1jbcxtEp1cQTMu%2BHBofmQafGAHRp3tORU%2FtjP0&X-Amz-Signature=2d5f524aa414b8cc2557632f2946e6a8c1bae40482e493679bfe0ea33c10d627&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

