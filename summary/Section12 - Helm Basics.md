# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUCHC2WK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASN37yebVR%2FTf33F8bdkNikG4pVQA17%2ByQvB8Oo%2FPQnAiEA8I0CtfRZk5bgA8ZUm3DdovBvQkQPn1qH4EMYKdB5x08qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuH4A5wDAzw4PBeoSrcA2TCiQLvbFbrctHyr5JCa4u1jnNo5EbFJ9oe5qfY6vet916QIQu1Shx6E%2BQA1cn2oJ07%2FLVnqhuZ2NLNBYZPRE%2BG02mle7jo3yOciN21PbbPtq3aoR79gb0FZaPJJqS8iLR5TQ7FLLBybkXjPe%2FnPl4CqTTwkqQqEciSz7r37QmYOlNqdDWXHVbUIU3SVVYml54ccY1OI9oqK6ofu4IfONaSWX4PyJHvXM9AgZ6JIUyeVemRLKAbvKz5COnhMQUt446deT4e7WK9%2BdyE5L1t5dKLYM9JleWXJ%2FG4K%2F9HuTDMwlsGj2AjKLAymvxr1ycFk2VYYVfx3u206qaelgZ97vdYhqQdLqb0fLwY%2FGSUKi8FwnSnLNP7CTLFwUxc3SMBsOT84Xt2GXKeXp%2FoQtOj6J%2FUFHFXAlSeV6ttYMm3oD6velkTntlrdyJ%2FyBwiQ1G2hO2kziN1QO1F02ldorzYl4fxFb1ZBBuj8ifrPXmH2BE7ii6L%2FTIfzjIaQCCId%2FLvJeSn4qXfCCP0%2Fz%2F%2FNh6qA5gYUDzU7Hdy5O6yI5rFmLH%2FCM1iH3znftzNbd3J8xHWAa%2FpaY8t1aZHKhLyswC1r1y1RoN0vDE1tgPux2BFgrAPiXaVURcZOdf5vyE1MIe8y74GOqUB%2F6nzi%2F7ICQM0zC5D7A6dou1UY5833K%2Fc1AI3nIYhJKcFScsPj1auyMqdERbOOJyldbl06DePfIqz7JrfSgVyu7DGJveLyeHaVcfUiZ1kdKZfu9Q4uoScLXNf3thm4utlVL%2FnHoSwNCsBlnZSVk8hMC31PNvh606hatXkMGwB306UZw32eX6%2Bf0dM9be0WccCiTX5zaxeupCEIrkijSiI9%2BvS1E%2Bf&X-Amz-Signature=0b78a212ee1d93f106c274f8c561201d05cc99742025e44efa4b4b3c9deff062&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MF4ZCH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpsMjQLT%2Fhw5RZia7rmXByL85A%2BMG2o0mrnpwT3gwlcAIgCQ3bTt%2FECVFDfqdJbKti5xto3fwHPXBUFUsovKZ78voqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcGGUUotWANd5RhFircA7KqJvVgvILokk6WhyR1t4oUt9HS97x2lz2r3ehCibzxfK0KsuVrJ4fB8%2FIADU3jUy%2BaOeoKqpjWyXwvG25CZ1SiecXWS%2Fe8NUzTw6prc648B8Nwj7SeT3d4%2FyoBn26yEawDAohPl2BtXE8QPPAmZgxX70yxF2%2FODvMqiEosEWX5TVsN4PPA4oaE74SITmRqPsAR7NEH5lGD0jlEVs2rscZTnBkUMvprBJwd4eosXP4Kzx%2BzIkeULG%2BMSFkfPUvihLY8UclnpXAv2ARMdFNVjSVWKoSEfk3BmU9n6W9xW8Z%2FtGV3yhYCi39VxfyInALuokjebPuNT5nWFwza92QPkUZ7UZ%2F9xpl6%2BBcF2cMmQNKUZVpn0AQYxvWAR15EOW6Y%2F6UyjYZ2%2BXqV1ETc0RNIZkT2FalQAqDKNC09v3fyZIIM4si4fkvKcBxpak%2BLimwfI9ovHoh0ujpdo6gpwjA2AwPDO2%2ByvpYVaZaWoSKWR7KF30f76qxZqpEwmRwqF40O%2BYiEUWW3FHIRVwPSe%2FOdKDWIF92Borjta5DncdYMVjs6gGrMTOM7R18YIjW%2FyRzigeggrH0W0AffUMyYG%2Fa6%2FtKygVNEbz%2Fg4Z8w3rSt551mPwRis4bnh6gYE9F9MJLGy74GOqUBS0csMI0uLExtYgXIn%2FRQe%2BYv7LNZewaCFFoUPtgY59bUFAlOYQr70r061OXLR2xksGdGOZXf3eZqrKVj901kH0xxeqCuAXxHdyrrGZM0O9Zdv%2B7ibJrxQ6kYtIY9jWIIciOr3DPCMoTRMV6oZ6lFuIv57pcOTibfmgyFhrBhyWsCLFTceR0j2%2BTjOezNLnncm3SoehOGM1aSdYZmzwxpgkZoXook&X-Amz-Signature=7ce40d4de26691d22cdf5d0560cdfb124aac2f7ba3032c0ed44272895733da8e&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONU6J5K%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClbM0iry7u5fyWLBQLMCl0T7dG%2Fsd5gRLFnCABcE8LEwIgbZt1fVmcLnvRVwKELekgBk2735SZqqWfnKHMDR5qS54qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOrV0MmdRhdFs6rjSrcA%2B2%2Fnwo0fTclEbxPTfdOOb5tsJlm5%2BCFgM3fd8Dt1Gn2%2BfBbEOsFOYUC0lSklUMUHMiJ%2Bmww4%2FQE1jtI57zPztC5NjyN7qMXw3DN4cBtrDDcCvO1cjAiemlXW4TuOvBle2Yxy3fdrY1RMGXifN2jJsD3%2BuVhb1%2FOD5b5P%2B8OD01Vo%2FAr7rfKj4PK%2Bd54T5AJVtioiiUlu05gAQCUdcDbS%2BccMEtZCvARkjpj3Lmhw5RlFawRc4LYYItgmTdeYyGxgnOHVy3HQ55EE9gAPHm4DfFL0lvq69okt2jIK9dMxgjXg9vubKKhDLyw5JTs%2FqE%2BSfKbhM2%2F3Md04nnupQL0IyoCcfvEmoMlmfv6LQTUtEP1bbrx26yO%2FD0ZbwFNRXHviz7Mp%2FI%2BxsqRZzaCKcWt8J1oqyiwlyURpsb96pDZPvDERI8tdreW%2Fv0myIjg2VCv4WlE%2BdqnkDJXpXUqBA5JqJIGMkAJ%2BBjBpKXhcEGWTJRIxczf8pL81G20%2Fb0McjMdAlVKy0RUHk3EC0K5Zj8KtGXt556Xj2%2BoaNsrtEFVwedt7W2f1RCRqqN3wj03FIPFSfAxzhL04ZsmghlIT3JiuZGKQhWM00j50Xq3nmkfnMUk%2FAh%2BMaDxwudKuXZ%2BMMS7y74GOqUBah24u56Fn4%2BBL%2FUftYNS5ra4BgKWiNRUVoX4YgpMIZoy4IZ0Ozw0KCS4FAEcwOchtIXHFmI0uanlpo9BoJTMk5%2B0q7Vdn4j%2BE8dS8lGB689HkXMY6ohrYUS%2BzpPo3Y5a2v1mUpQO01TIe0D2TTbqV1Ti7%2FMEdW1HYvUbE7%2B%2F2SX%2BjSDDlyZp9eJIttybuGnc%2B29xlQqMZn%2BZM2I1wpHXP%2BfKQFdU&X-Amz-Signature=6fa139744223f26e98ef1b28db64a4c1e70a3e0126a005f77520734042bf39ca&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOHH2L3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd%2BFkBUEo%2BSlsdp%2FjmUSy%2BAbc%2F1kOeo9V2gvwhMOgHoAiEA8J5JK5FWOn8nacvE0EzKkql4vBoAzY7i1ko6TmcHWrQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbTptTXZU5ZM8hbOCrcA8KJn4cxP3dbkuqvY8umZxNdy2dWtgLmt3pEGxavluklTN5FR366dq2HS9md5%2B7XL0ZO%2BqmzwVj4OLQmMkxk6guCUaIMnZY5cdk4LSRc3YZt3OyCk0Ve4p9hmZe0apyYqmc4wb0WNE2ueIlAhav6aOk1g65m9Mk9IdAxFrioEC51rJPv%2BWXApEcjNKimxDWND8aybqG6OofG4fmhmaVaL7%2FO7wO1br2v517lyx3%2F8s55bsNPAXO3GnlFuhNEV2s68iMWjqxve2rtVxjbjG%2F2FzZkyCHOOFF6TbKqkyYndfzkffE2mtCnygxR10QwtdDpVc2CZDLKTU1YtHYQFj0K9ozvTy7tKRp%2BbgBIItIbnkzQVGo5JSMeH0Gjwc%2FcLiTDy2KWNenwR9PVDOn02Iq3rabkNE8UcS5hICJ5TkUx%2BrLGUvaegTOaiC7s8ApT9ByiOV2SZ0aRaobg0ZqGvCwrJ1qoLlnjk7eyQG18kU5uRRgcPv44IG8w4iP6UoBLv9IdA1W806SL9KjHo1Gp0n86Cqebw5osDeaw5D2Li%2FPykmnkZC%2BDuxCv6qevLN60heOruIFcQ9OEhWl1lsLKva5vMTvkstXM9mmStjLTeTRiUToXpLsMU5d4k4EqqKGhMJu7y74GOqUBFbK6k%2FBASR0y9osfmkl1PM1qVF20kU0pjzjF%2Bzf%2FaC13snnb%2BKUoiDpO1tU34cb2mox%2B96IU%2FbDsQ01IOg%2BeIeVybtr5Ixcl2wMwdD%2ForvTRqtR72MxTzJNtX9ESaJzSIlXt1DHve1NQMdyPq7jaTCIbtwZd8F6UzuVObSNU3fkwfzivTdl%2FtmbnEkSTf9enykTi7Yuinx3lmuiWfi5RXwJjKbs5&X-Amz-Signature=3e6fc9c6b169edb878787cf4deca8b6038a9a991d1c0fd59ce1777f5e6a0733b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DV5TEGL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B7s23wPUIx4Or%2BwxSe9iI98t4LHCn7phesMZQ7NZ5qAiA9vvDY0sp7ZnfiXoJKcs8stZGqJEoKqiBOpAWr1qcqqyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRLp5UripPPAi9U2KtwDM7iqauwVmwLavOPCNtTyK0PSYdHVLwMB3do7vzc0N5yBnGdqloblT%2FZ8Wnc%2BL05j%2BPGF0LWsAZIFVd43rvz3DmjXJDSHwDUQtzwRyuDDU9PD%2Frq5UbP5rnlySC0V0Bh%2BwmVsDQ8iDwmnZG%2BQQtQwsVAl3p42rmbReeyDmM1qYzaYa4PH4wOrncCIikfRTlLHQESc6p9E4hR9eApiGgdDV3PWB7GX9f6lsApsXmwH1%2BwzpPoCy1P3jIJACnJgKChOVK0sWdyk0WVaWwz1zCVtHeJMUrgihehfPTGUEDPNXwivBqw5gCVhXcSNLLrFaGsy4pKC6d5zzXxJiCGESAnfXdHLPkZX1x0rmCuVH7tRJ6kvzpNInrWUFjaM4wqtx9Y1y3zd3WBGLDgmQljcKkh%2BqYdh1k1ucHeL%2BqUQonZloSnt6%2Bo%2Fg4vZv0%2F%2BM%2F0DuF0LmknGkLMlXwPqPpavg1KNJ%2F1LNbdJ6fq76aQlMQPNDoLzwx98N6baeitjbY1Lpt7H16apQdun47kOZTkXgAicOOf1wO3JVFeqkPZao0fZ8e5SiKgUd%2F5Ad%2FuRsYpq8Xu%2FuBS0JkWTF2UodC1paMqdqUDirV7XjAxTX5mLic5yg76YV9cuB%2BuFmVLfeZUwu7vLvgY6pgGmVldSh9Xllwm7EN1TFnlAj7%2FGncoAE71XhPYXnrDHa4I%2FSvJLSgMkSQvUlGuW7wWCmbVopJ%2BFx7kxHVwBZikeVho6CMG1Q%2FFY9ccapdeD7%2B5UdUDE6PrCJgJIjYhrGbJvYTDM0b1p4eXFY9Xra7BcJPtkJm87GIr1GGQF1sz%2FwLgK9yfrOe73TOHK%2FeXoPXgUKwGRTlscYAs%2Bh4%2FGu7XQ2DSjmpYl&X-Amz-Signature=369aaab55736b8838e9d8a5f5fdd83edc54890f34eeb4538081afb8bc3e484c6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN4UYTF4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9%2BYLFNHuyN1WpeHg3zcUZlCoti3KDxpmGU7OHgrHIIAiEAzmPcKEa4WjhVlj0%2BHNnimz4pfAXlkzdmoAX9HKMVFGUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMMC7t1sDX%2BkXdP2SrcAwClMgacEAscqFhBNSsAP0t7bT5s49tzmaE76zeSBIwa8wXOtSHI37Ermj2DIMQ4KSXzgtMkLiaHWG4auhBEYLGeApxwj%2Fv32HoaBvflek35sbX%2FsNEE1hpChI9%2FoUVUIkB5Cb0OY997O7GzzAvRHpJwu0PW6SkiGZQ76uLKfhN8GS9aG5liUlZUGIFEkoDkz%2Bfp1WYOctICopHpwQM6JxX0fWjHta6VrOKG0K8pAqP4uQa2IJKJbx9R63Cbs%2Fmnr1i%2Bl12n2VQD7avPagTQ7HTXrE590trClsTcb4j3CBKQsp79sxU%2BpGymymCLsunjfwiJH8HRX9BXkEWaSn5xUNcKQRpgbn0gjbZS5SRhogwuY9j8sYIJ26nDk%2B6njr6c4FxX6Cd6eqaKw3GTQoK1c1v4%2FJlT2uT3EEM9W2X1bcxDtJVzHTEwdX1LZG1qZYXMfWA%2BsabaTjzhZlKisPO9nUv08Q3yLJNofWmAuSYz2Ef7b0jFbE%2BOgavs3L%2FuXHnsDTsYfXRyx%2BalMctOAVe5a5P%2B7Sniksp%2BopLhDa6XljwR7xBYXDs%2B1IC4DW9eWcNIqyecO158HQWzpHs93sjqbjkm0DG3aWFivkoO7CgGSC%2BMs3s%2BpDW3wMSi2KA4MJy8y74GOqUBM9dyQXka0uVJaYuUJcSDPnL0CzYII8Q0GvNv%2BNJrdMG8K6d7BThd4kYDLjQPgP1MjZnJDGPfE7e5UfOZOwiPzvq1EjXOoKgAf0M0DohLOQPkLCyjhmchKYKlDD7YU%2FaDZmUcZyt5%2BENCMvfJFyTeQQttYwaP2bk4Hae8mosIpzy1Nenq8hQj2RwLZ5CMA%2F7zjxNKK3S2PKj3Plu2IKynb0Q9yAr7&X-Amz-Signature=e6453cf6605ede262a2622c05c16fc63aefa1fbf3dcf817fb8c8a702ae88bdfc&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2TXTWP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWQlhok9cpaaQLA5Cxy95XArvm25CgJf%2BbcoVs9LbEsAiBsODNcfMl3IBVEc29EKpDQUvpGJBb5weEOGTWvUVH91yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFYmsE8WfijBtr97nKtwD5TuT76rhAz3pr2pr0konk1wI62CdA5yslZ0z0J%2BZgn%2FvrJtdJAsLFvjGj%2FID0O00aXIJWtzvduW7nkx3uBgfR%2FGaGTe%2F9oUCrzUSjk9n%2Bzle%2FA5hGoTcV7VcXHHsZ4mn7wnKthf1QC2eh4NqMvcabKAOfjuxg5NsRSeXgAfMjqngWygJU3jelwIIjBCAUGGMyspXeOnNpf1%2BoAkTezpkqYigqsgCNjM4McLZQUj0V%2BHSAsOyfSOxc5goWeLePGGPhkWL%2BfDqVy2lhe%2Bm6mDz%2B0%2BjDl7CHRXHmloF3gIEWk8w%2BqZkWzuBifEVWFUhNM2ee80%2FAlnYlKQIRvaiXr3jpFikFVinuyVrDW5OgZqYqpLQDWNYT5TK1ITcuMIdyz4rpY%2Fn%2Bt%2FMiE7DFC6arRzCvTM4nLN3Kgiwtz%2BPvhXLcrUq1HD0Pwo5SoRgr98PljBQFqQvyhp0TrqbtN0sDfIASBaNtwqCqRCU4BAZk5dtTEiOFjKy2RFA8J0YSf4mm6dOVPufQRj8QAbTQR%2FxDX99FYOgN0IbLD%2BlcEn3fHbXo%2Bi7aUzBXpsZNuvNQvXXfywC%2F5eCJw%2Bbd2KdbRn9cWqhbf1GzSeD3lFzKFneJZAgjqjxvmpkxhlwsD65NvMwpLvLvgY6pgHz8htZkb0oCpe1mFrgkopZi1Gj%2FndlOaEZ38E2jj2n9pJTDuHVLBJMEseaDWMaagJGyx2FBnexzwHs3Kon1tU6nVc6Xl0S8jzK5oK7OnIelhu9a2Cf%2FsVlOjUxhztEjh7g9ddWTQ7t02ZVaNd0QV7K2IrJKzFs0uTe8MvtUIXD0kiV8OpwM1AkIsAZpdSXaZitomTF9Z7ibvVG49eIeAEqLBkQs%2BfR&X-Amz-Signature=869141f387452ba60886129f37061a8a1ad832f505a9bdbc18e3d51b56def2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBTMGHWI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt6UGWuAqVNAUKrlLQLjJ6LDhffThHQXAPBXTw3KjuYQIgRS413L6rgP4gfS2FwRmTDPPYrtP1YdPTN%2Fma3W9DX4YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa0hxdNyzWrx4ZDUSrcA0uw6vxd999FL4a0PxQHs1m7jLJGPvLi0fO%2BhEfL6zekxt2e33nrYKASu4bnbGjf3tgbWbQMnEOFG6Vidos%2BBMNobmeteS8xuIXYEe50Ni%2FKJZ3b5WxD0p6rgJNsnquvK5FqJyt6JIP0k2LwL%2FVB70Ahwgj1Xn5SUaEwJgMWYasOr2ytUIOxEiCMvyuBvs%2B5o7bX%2FcnWyaIdzkguNLEf2VPgz6t%2F4icm4xuxM%2FwNq4%2BMdBOduISefHX8E699pkf3eVmJmWYbMNlrud1IEKyJ0eLF0Brl6wTnx8CPr4G15%2BMdzuA87ZBV9tn2hN1zs%2FQInQbepwPrYHWcYcV3HjTwPxOcZ6zdBdB3fm0aVhmeB8qJj%2F37WtrBwN%2FMOHuzBep9yHHZWj%2FNMLC7M6Qonlo2clfPkeg%2Fht7rY%2FNmgGyj78vr2cIioHLLe%2Fl3Nm6HyH4bvDLTWrfEb0ntkFtP%2BRj3VMdQZPWAUcNXzVpwcaFKxbwBKm2U4ukmNZyxtlLICB7BbiolEtBhb1EMiDLOeMzoqMb1zFLuGtSUjTNRB9sLu1UZQOK1z7hGEnuAz56snX14bHLzcczzfe%2FvukdpttZjLszEnlGMzV7n7yJzreWrTNTzQVXeGUZ8aI1AFyzoMPi7y74GOqUB%2B9x2dJWjRr%2Ff8NW%2FeeZ60xZE8C%2B2bKvBnSZbS%2FAsUn55A4TV6tsseQrKOkaEF5ltHKBh3S%2BgCZQFwxo7SZy7wIuyN%2Bx%2F51LDgxDBUj0BOz9bXpyHeIHzRxtZ%2FjSSmVl%2FyHCnfVTWHYzrFMuRQwF6UcVWQTLAuRvOrSK5PXiwZmEfgeAGOVHiiWby7PxWlFGYi9KSMvD8hVBFPfSvSwzVaiuCpHrY&X-Amz-Signature=8f2d483a8bba2ef83119899f00ccff913deb93780ff41aef1ef282c7da9763d3&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPGGIVT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID10L9qYMpmh1TR2YBN2nhqGieu8v5IofQWl7DMuuUAtAiAJ2lQy2jMP6Du2qYWUPjv9UF3a69nDyFgnoyMNgZ0SFCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa1ZfDCGR2LEpJom9KtwD8lLg3ZqDyqWZwSRxZa6T%2Fc2CfVjgsI3TET0a4vdJm9%2FRvMdx27n4bfM2uOqTzppdm%2FEiUskFDPg8tVuK7Bll618rWtKKB8nW1RPP58BZmGwjPPPGvyix6dQXEPMz%2FtxFX1UCig%2Bfy1Xie56EUwDNXm1jSvwuk4k%2FLS6IXACkd4XJSUxsHiAwv5uWM7mdt6V0H%2B5I91PMkWsrm7OXOY6RpOKyi%2Bbyi6ChDEztEZgrqlizaoryejzSgpQrH48vR%2Bpj62i6RmfTfy5MYIW9zWPzkzZltxbeI9R8HRxq70y9SYc%2BirqPB689Ti6ztdIZiu84EjJf3DOlCkvcQDKAtFMrQYcMz6Ktfrs2AeM2gEJKQcnZs4hQJb%2FmWWNfBZ%2BUMe08T9%2B13Mksa5I%2Bus9O8eEawtCY0Dxt2xEBL6w1%2BLVJ2HyZ0I%2B1%2Bv9%2BGcuHthGS1wIngRjoqMYRDU3cBhEw26DNFOqplpq70naL%2FK0%2BeQTdfxte4DskjZhTlgCVBBz3t4EDnEJqC5kUtmaNPNjTqSES3gJwiqDwmK1PNdt45KD8V1SSBOy9kq83HRI9DkoQMq5PD59pPLcN7fFtB%2FkvvSQ5lvZ6a%2FhoMyOadK8MuNjkWqYI2%2BctlY4wGCY7hL0w9rvLvgY6pgHr8SR7d%2FwVQIZF%2BCoeJ9nNx19MTFxHdpc4G4ZuTHAokArUO%2Fc1jOwmTwgvQhTfermyhE%2FDSjRAAw1vZucI%2FU5t2XKau3K3b3f2MHlN8wWHPeA8Mr1RJjuOT0u%2FVHZqLS9lQS0Q3uDaP%2FANPsKFz3JAqy%2BSlKsLQLUJ51Ykr58tNTRUQsar46WYwTTQkaQRbI1hJ0AE5ubYEXppNo%2BY4tqEp58cCvmr&X-Amz-Signature=24550438ba5f1c8ef2729374769a40c09252a90bb6ec7cae120ce915a06600bb&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

