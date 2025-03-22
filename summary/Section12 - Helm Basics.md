# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P33X5JH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDUz6BmFhf%2FZRUz7ymeR03vpHGLXIkaYJWuF7DwA2iS8QIhAKzqmJ2MmU5Adm13E%2BaIJ0qxfDIAAzGh%2BJumZw89RuXGKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc7ol0S1S1tqQPKEYq3AN%2FVpWat5y7AnoQt5mWLE7JsdB3MzQDPAQSCpZjwNSg0nv3yw8pLpq7l0GfgDzXQeETFCfwElcdd%2FhZiV52moqS%2BuKrOf4OfZ23FjYGfgEtjJw7Czf6tzVkY9ZS2TtAeeF1XbWRoCBMoF3mkxpyTuQTKVSd6IGTDnw8dkcIxrg5YOIBqF45vPI%2FAdxqhOlC2ifjA82%2Fve0pIEEMOaeXGzw%2BrNOIFyRJVQyPFQDh5JFlkqWkKgqsaldNAq9wkIs5jwcBPy48CQXVEybcYmjYEKTSLcdzig1QvmoGf7nLlgSIRtvB4R07kanXtfV4xF3NSzzzu8UUmjSdxwly6hqygdxF6hxEZ6e500WOEJ0cuAZnG3DbbFEOupQF1Mfi8w7mU2dFgdsPWFd4dH6zmMymvRrQOXlcTsuVyQXEzPIDy%2FXnLVoW4Z7lzJPO9%2BIBk1KK1vUa0YvGPxM%2F%2FfaJLpEFbPNm9%2FaTTvEie%2FmMM4I%2Bia%2BHNYQxb57Gy9Z7YzSj%2BMQZhPWACE596jLeD9VdsxSGKxq858CxqfrPZJZ4B3UtCazXzB9zHw5%2Brs%2BZ73nmJUolAl1AK1gzHcx98W5%2BYnwZkOSWnrcB1KQXup5FRIMz7tYrMWoHuGQ2lSSgug23LDCK9vq%2BBjqkAQ8RSglkwcZGSIbTBYzDiDKAykh701YNgrNXu9M%2FEXPz2Wad1gevYnmwFnObZcmER1y2g4K86G%2B8cSiHogULpf8eHH7vQyatRMd6sMhb1Y%2B9SsC%2FDa9aSOttG55WAdfbzYRmm0bpMFVXeG7qJetG9njnrMzWrKVkx4gt1DMMeHXOEh%2FYXssw9iiRYyeFnfJFYthfeD%2FlLRTE0c9%2BTaVww0qjpik6&X-Amz-Signature=90a11d536440f06ea8ef0d200caacd565bc4dcd32d98cc987a5f469d6269c79a&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBHM24L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDuiozXKzjBKszVbtElxCY%2FD9%2FkHSAsQkjiDOQ9xixG0AIgDNCrcwXZApxDG3HaYA9f3rRXMZmZN%2BMH1rJYbiSvY2wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG%2FhGYmQeVO8ZxpPSrcA5o61naq3hPsl0i4JNIqM8j8Vsg%2BQc4BE1lCc7tRnAhnTq7ts5ieGdRtDPZJNVuvGk8lKZmKVzUw492VglGbMg%2BYyPMmxWoZpAztxzwj3fhkrWKK6Kx13vyGQosF5lqvcn2AnzwVK1cIvClhpnycq3KsBcTCptlaXdBKc2iBEnsUof8NiM5HQf4DetuxtMKOlny0cM4n6m3bGL%2BFNTu69HGWz1tlozzDlDSoB9wYbUWqwa7Yfx4aJlGwnvD0Hj0Mw2ozT2L0tCtcvXRNQqFOkG7862DlAH4enqQZ1XsDkTtW318igvkshzHtc7faqEnxe457BMsSZkJ%2ByaBIVDKwITXItyxIFVVpC9hxKzgbmzJo2mm2sYByKWkRXm5xNkDGccgL8GqVApMt9%2FzzUeopKiZWCq2N3xsDOrgU4NwA5eKcOaG0RF4Rl8fruvWXNA1lkd3l4Z4gBnk4mSXX789bbnSfEh29Kch%2BfQ0bEY2cX0iLw2uA%2FMmdG0SsCxGSC8NOhrGBfyuSNkDY8fQMO8qnfAQpauVi4HEqOkwOa9oFzmrDBfnxMzwdAoq%2FMmVkU9kTwLXFIfSqrjblTBkWMRsYuC5sgCIpMKHmzFDbiF1PDgAtFI%2BRoxDsFv5UoGDKMLb2%2Br4GOqUBGo0Cgpe%2BIyeSENikADV5%2B7daKytIu0KkHAMNVDvkcss85KMaAn1ksiTFeBhUnV9rC1yQZoyBuv8pbk1FBUKkvoja4PhShdWxuuEXrhKiXB1DzrMcfJ3kI1Ijadz6sq8bP9cf1HRMn5NkCvRJdG2aW1Ybi5HJj4MocNABkxBrPBD3fwDsry%2F3JEI9e1NOK9c9GSA%2BbOp0Xx9uqIM03Q4ozeGgttP8&X-Amz-Signature=bc4c4d040663e7b0c155b308650fb7a466a9272a16194c48770b9d728239c4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTLRIIO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHDvN0515h%2B9kX0q%2FHVVQhdSwPsPyEwjlH9d5jdWHrXYAiEAlDs4t1eWIpX2B%2B0eCrrzZ5nJenPlXTJFedKjvAce%2BsAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINTG9Z3KPXA%2FVU3CrcA0x7%2FfRTRaTLXo8s1mm332xA%2Bh6k8oyOaQ%2FoGZfHWYhajVDN77wSrtMBljV8yps%2FxDcoBCL18sl8HMkBVjYS8EahMUVENO%2BTEqVZyV99%2F7O9INzZvf3RkVltJzbgjPOwqohLF%2BHPh2kl65bVBZdF1KNO%2FVL%2BMjUwUezsClVNVhEfEPYhY5EpiJn%2B2A27xrhM4C5xjDfBEiG4KWQa5Yhh48M4SgNoUBG297XMR2GJGa8Q59UlC3mnzpnl2KFq5JZMoZW%2BUpr84CFcQVWVUpoi0%2B99rY6AfadiAlZLK9WxFtKrbD7y1dJaba2JWJJRFmOSCc1L9ziFpVPIta7KFZ1epmscLTW%2B3md2LwT8bO45JIQtKILtOkLBrgKzpWbeKaToAs%2F2Cf7N%2B%2F%2F05CZgsQvT7npLWpUrGR7Eq%2FGBD1tatCX5KnDr26xgvpdL%2BJNOKqO4hSXdNE%2BONA0uNPn03O%2FRmEDFAEmQRCTSUnlGPHc3a5DfxgkKqt6r155UrfLxmYmEXIRPHBAeYlr6jCynKat%2BQefHabaiGg23GmEyB6Dl9gfi7PbcAYBwFzVWQtYlDOt%2Fsu%2B9wdKBzOGjAFtPfIC4yVEdoFlw9wIvfo5XChwtTK82TVCcjDgXX%2Fnv2WLNMIv2%2Br4GOqUB7jnlFLQ%2BxpPhNUqQVGgQ866N7H2Om4m6h%2BBaLvkgT7mCuU1K67v5DnN4TuQnBtOGlbUpAif%2BtYkjS8oleGMJX%2BBK6%2FhUi0%2FWJikBB5xuvxP4AKwLBbu%2BJYp6gHtfGO3MXhsgvupMnR8HzNLAIdR12F6H0HB8cEGTib4WGjTJF2d7gpFPsSCmOjqWF%2BdM6r8OqDn0twHhGa7kwiswjNLEMu0gPRKw&X-Amz-Signature=7c1511740c1401a1ec870915af21549678edf9284434faff83b21b5f71724f3a&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPW6EEPU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDoQnTs38lLilpthNWeLA%2BSbcWLmL0DUj1fPJpp29%2BwPgIgY%2FhjauP%2BdW4bUEYJ4cQ%2BofYerqViYfY0nyEWSh1nAVEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2RekRrI%2Fm8NZPoECrcAzB2VL%2FtejXnrIpSazVqGO5GJ1v5WcxbZmSGP%2B4hgNtvuBxsXt3VZlcSIr%2FUUxZ5vS0%2FuNkw9nUFSBALxdqAnffB1IE1tHxQJaMLLJ7l1vkV08md0%2B8DhKy%2FtJa%2B9AzzL%2F8AkQ9zdeAkN5xxwOXjvnBKnTu77eOL0qrn9xydnAhlYsFRgA9yzqoYJwsqdIQybIGnELaVhzJIJoUrr1xcDV5USMusFvnz3cin6TrQyQGMjT1cKvHnPpi29LyIlcvKE0yBj7H%2FXYQ2fCZ9g7pHgHMs8eJnbr5ndaygWvCFPXD9vjOWdKVbiMQhbUIoldC6MQnCRKVINUVaSzaH3WDE1hGuQ9JV6BQHnQZCxIhKI7L69Yp1OtSU3E0b%2FHhSL8gecHb3mzS6M63%2BhgT1svKh8zHSS6J%2FxKiYXRJtI9Dj%2FHf75EZGeS6vmbP9SlI3YnzqpwqtGCofWb1H9GAZN02tibM10ZIIxMp5m50ARvYqPGI8PT9i%2BIGqFvfhYVAVxxoYXJ4spggSp1W9CVyb02Va2JKTFOGvwQZ3RETE%2B%2FtbR7yihUT7t6jOw7B%2BWxuddJajtytk%2FQZf7v0C5%2Fxv8fHAEcS414rbiPM1nD3QZTc0gpxLpl%2Bq91BArdx3r9F9MLb2%2Br4GOqUBdtTW7EFTjoLHOYblUd8vPrkJuv%2Btff0%2BUZ7BrqrIJOZEnP0divIpkkRvlo8hplCU%2FKuXMjgmI8A08wvc5a8cchCg0SzERuK%2FbLAmDStzVdJ0OS%2F3F%2FliG6LTZEJ00ujy9CK01ZQMeqnkImZ4QK2AO%2B7Yc99%2FtyVOz837Vne7qzJ7BDvdBnUlm0rQuerU2xjPxeEelGsZrWuK3wptrLguE9y683Mb&X-Amz-Signature=4ca14ff0b97e1fd046033863e31885a7e726817c0e0df06e659081aa8fb60b00&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EY4J375%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH6ClCLhsrj2Vwy2QixQ7iGT2DqAobplXmmH0mHTJ42nAiEA8ur0WXpkz25%2B9sGggDzwuWFDkhpYITkKvfvXjbICDj8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8mjIwsd30cxXFyESrcA%2FTN0qpfeNt5Z3Aq6w%2BO%2FSOT%2F2VfqK17%2FXuRUpkQHK%2FUetA5R%2F7xX2QW%2BMEcwxu2FnLmhPRAhbpUr2a9nw%2F0WrIqBRYp7pCamJBVaRuHBHDsMqWTYKwEQgm%2Fu1sZAXjESaCAq64CMXgHFjRx77YqEpOVEHZT7emnv6P70ExWZZCRUVrbGcEPqeTOYQAHcZ1bEX7q2L6iAXdRBNss9HVToUmIamZ4eXdsI9CEPxwc9XtG%2FNPrzP5ignMSAO0FNg%2BA2tSnswPabU9pYq6gltwpbthYVIDEGTm6XA0b5hNViy%2FSh91GyQLZ%2F%2BaP9IDSZrx5%2FGyWfCo%2BDo1SB7amJgP%2FCeUeb5Vc6KBCMtalCDJ95rPvcJe%2FPhOBdcYEy1SEPMbr1BiqsX1h7hk4ZL2Fikt1cEmqsBuQtCEbkvdyOQlPSVmYsx7hhopjctFy39DKjbj0v0yrE3Lr9NciQ7OGZV42dIGaD3dt09X6OrG32sp12ylcWDWa%2BQ2xynIVIxcrSBdDROqpEwxGEHo%2BqmbRXO3fAZAcSj8MhnPKbrISIMGxhyGkX405EYc4a7u0xJmQYDSJ5vpwU97n%2FsrMlL3ml0MuBAWRcyU6GNkv8HSjJvBwzqt%2Bbypv%2FP7iVhny1eDTMPH1%2Br4GOqUBYkc43wrPa7bMSX%2FM9nAaDM7yLbvEAD%2FtXh17NNRuY%2Frm8HfZiaYnmg%2F1clUJpt2xRdrYS7BtwFlEtQSNcDBn8PUjB6WXdjdGe8WDbRsfaeYbbe1RmpP1b7wTgXayY4a%2BMy%2F8%2Fq6Xa3WJK5Zht5Bt4WnuMwtVhER%2BgSERPN7XPHRzxEjwhU87uHYJbChDq9Dkf6aDw%2Fe9tXf8rdveigj6en5upB5G&X-Amz-Signature=8d71850e68aaa994026e3e872268f052719890aad940fc3de25138d24134ca5d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6I656S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFegjBlBJWy2A%2FPtW6vw3rLMiogDdnOMPJ%2F2drTRb7mQAiAhMA1U6ZTMNezHI2UqB8OxOOAtCMj9CSQA0PGUa6lzJyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMam8wunA7hxGJFbQMKtwD%2B1DM6d466qRes3c4npA1b0Pih07yYFKdHBDXGjHYUGHm2fa9lG%2Fz5A0iAaI16NqOCQzLeFtvobPahHNrj2F%2BxIw6J3h0tjfE%2B%2F%2FzQrqj5f%2BShK247sgu6NY3pdkmCR%2BYOXOJNAxSQMjr6nS6SJ0rcJiLQ1BlPRy8rQasAwWX3BEuqh8HwdI18BhnZ5c9uGaEx%2BJ%2BTUhVVll1FFG4VqsOCjt0Td0NT0OGQZ0yQ3rfj98WDr2fY5osRb9boD3YQkJ71Qw0HYFKIt8dhE61w5nNylBBDjM8lMHeTyP%2FFa4dFs2jUGrxN1tHuZPDZjMcCBqcEsaV7cvoIyGPGeLwPy5XpamTIUJQ%2B3lWiV%2BaoY0bgFwZyHdSw%2BMNH8DCtAsnVqi1%2F1u%2FU0XAZ28ouCvk%2FM1OaJFQosFNbryFi5JpqywxDGVGJsTZzsGWhDef5rrcISGf%2B8KTPJswoD8kSqlGHGTfFltBFTjuBEi4L9VUvlB45g1uECo6q25qaugKPyzncYK6otdcNCD4%2BovYsDP%2BmV9uv8Ay270XjaBjLbAvzXhCn8BGiPXUeMztDeZyriB894E%2B2ixN5BF3Cw0vl9XF%2B1qOM2KLQT%2BBVYRIL4gHgrEyyjhSH5R1%2FbgIMVGaqNkwnvb6vgY6pgGCCv69fYC7ZzYvnk5PBwZopCYAYVt9%2F3nwrqu68EPm3OSC4l1wNQsepNRbu6bRveeKhG21RYyWtnY12RtaxqQQfA2Jzl1PxpvRrusZ5H2%2BT%2FsKrR7Uj8t1i6fJcL0OQJYBJYGEC4QJj%2FQ6yfpogWmqhtEjJQAgkXLRmhxEODel%2FUOALDl1ggaInW%2Bmq%2F2RMqIBaCabzXZHIBqEdElXUVlpTzzqTCjY&X-Amz-Signature=aeb92f1a4b88685a77dbd4a8b55841c3871310895a44eb1e60e50f8cecb333ac&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRC5KRZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFvnoWoq%2F3bY1836nJJcP78kSM5T2sEaPjJM%2F0J5fg%2BQIhAKR16BCUTPVGV%2B7ZwzNDc%2F8DhaHKRszwOJ1qDOXaEChoKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1D5z2Ds6dy8MZKxYq3AO5Vi8ndTIPuG4sRveD0cyiwyg6RDI6s8IABCnGLU6LKnB1DRdG56E0i8TcKJz8GN9GbC1meIArWNqf%2FJiNcP8FiTmTHIEEOvHc0iKQfKCPnvFoEUMzLn9bIgKt%2FP1zSQtpg4dwcpJpnWXZPs05Yw8Mvml3warIPtMV4yHcN%2FdMd7jnTOTvv0LKb06eBSQEOB%2F7Qdl6oWCspZ7hRyOGmGwfaBNFVHcl8iNqxj9zwbEC4FgVlzcvYUyDczrL%2B30mIDIPhWEKQKtVItx1pFZdCfQ1xHin9%2F19hOR%2B80Ih8e%2F7MsrlwnNppKiB%2FOftkVA7vGbd713hH%2BTbI%2FgiBB8mb9cGbrTMV65pk027FTnko%2BJCBZ%2BEmXD7D34IsTd%2BjR2BrpufilXuwpRSZwW4N4%2FI%2Fy9FtuBGWZ52KLJlZV3h%2F0MaETarGyl5PQmJwBpxBdGFm4vt%2BNbq8eql%2BHMWeoF%2B1dowamI7AHhBXGUlqN4M8PEzCiwP%2BoUvT0z8n%2FfwKPp4KRGapf1X1I1gn9H3mb7p8wSYXVgLjiT9AygvuRFu4YISfZCVgcY4IAlJLUoCyuAW4VPrjtDS2e4WnGzwQLYOF4Cw47M51BCJCL6LjzmGkCoevrY2T6%2FIQlVyAakN6zC49vq%2BBjqkAawbCvRpnSfT6S%2BbPajGN1liAipM3kjkLhKYr67WYEfzOE5dvqVDBpuilGYtIOMy62SLMhlPDln97Vrzj%2B9vxiLdtnUgwUnStp69unf4aQ5JOvx5Z1ve7jLWDas%2FEVnMM4z%2F8H9FeKyespjnX2lTwU6n5b%2F%2BIZhHa9kAvuL6gt%2BfzabKMUREdUW0EKLbyPkeK5YnCxPiAE5jAs%2FdANtZVsKtTyYO&X-Amz-Signature=4dc578359e97248fbec6c7bb1b6e74adf495c19624a95f4fe1d2229636e2a39f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7U5P6CE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDvmACI8afKItIo1y2DDTZYym6rAxfBocc%2FTEPmcGSVRwIhAKzQwCzjj4GlcCjWAZfiJg2aQPUQSgxIdjm3POiZ5thgKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUzZp7T%2Bw93Gbd%2FeQq3AMlQhkLaUcQwsZYa6cY2zrq0KRy5MRbXQUGQUy9nltlthJN1NlA%2Bs4lHolZOI13OU66fhg4qYQ3Ljfp66tjGSRTsTVGfUJQ48Y%2FavK%2F4epD4P4I8mk7w%2BDUq5bMM8gvwHsIwn3wZs%2FUGVQIr5tS0NyXiV3mpAnKq2GyNNjbeLyH6c4AmWjRrY20edZAVFwgmR3Q%2FtHxV30A2sEie%2FbfnRHz8cou8H%2BLxQnkWIHPcSS63%2BIxJSWST4i%2FKeUvlcN8LJasN%2F3BIp4urTDnonJ0iIB9iie%2F1VEgCRbaOC6zTzIh%2FpAwE%2F6zFapyZjcQWw0boiRvXbMfgtamsKQKgs2PErDHIAPwaGbR%2BItrQC5wtg98q%2BVNJuVy9mWGw67yrNzIbeCCW%2B6THTp186V0ULDd8Dyc7agBpFCxCNP3mOPGRt4bm8JUEzeCEv5nQNse5IvVQZR5WBRmeeb2JdFwtOG%2F5yrAGDvwtYQRWEWgu91cOO64VP7RGvdY4eBTAXqei48Brclzwm9ecQW8dUkLxr8t%2BJsc8CRWZs5q2fjlkO7WbqTLDhbro2gJOtZZkrlHqeH6KSpNox6jlFs89GveVzoX2vTb134isJ3OSg1945Je%2FkDfpyhE8QoHnAEAbonpcjCE9%2Fq%2BBjqkAZwh%2B0E8BxadaBl3J5I7Ax4xaeYvEBSTQyjfgCQ1Ea0w1GTH1ZozfyLNdw95mPExh9Ub3wJ7WJgS3kYNA79fgK6%2BKXXaGUNA4437OysvKpAav4fCpXPQ%2BPDhxmcCnMC7RfuxWGpCzUZt567%2FIEnsp6tapwqVcXg2nSNdiIrtI%2BIBQQV%2FZBMFstNoaQXLdDIlz%2FNx37NqD5XQWmc1C7FwOVO%2BCajq&X-Amz-Signature=ef0976fb53d0ca447f4fcd8415b3afe90b09ee26622b863272eec80072f91404&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3Q6OQT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIF4eppUuypVaBDY9baKFJsrTvQ5Subv6YoAygFeWMOgVAiEA97oa8FUM0cHXp8Z0%2BjYa32seXlEIvwnybdvQZGVzrhMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKu0hbTtmZMg6tJv1SrcA07JECjVpvAXZgB0EZ8AAkPUz0e0Iz3rDcqEq8o7mpCCSUXRlzRawn0RHHFGN%2FIJE87tS1pKzC0B%2BTdEiGRn0mlpGe9ZOMMezpQ50IsX8tVEPRt2W%2FE6pl5Oc2WUWLgGc%2F9NvzjU%2BgpRE%2Bt%2B8dgi0XIR7x23ny0zc5ceSezhTB5f198SrRReahGWodRD2ZvkNnOs42A3cxYMnigCHH2EupjOfqFP5JeazkCQd4zdqNILibwXtW%2FLhlLQjz8NJb%2FToZYoIIddnmBDrSOACfhef%2BlzZOhOjJnNHf5hpAyFvK36O5vSXUgIvhtbbWplqCXZWMNBi6kZeZPu0fSk4HkrOGxkUAOzaqqb6hMnthAkW1Td58sWBIsaallG0tb0OfMSuLB7xMBTbJ%2Fiv%2FJntBpJknaC%2BccgK8rBc9F4ddlGFeXNWTXBV9VCZG2ZDWn1zLQm1fhFK9qKKKFj9FRU6Y4%2BGuWS3LkHL6Yre0KHFPsRw3j7ytGdgUkuWNg3FdfJ715FetRPp9w%2FkcGunxznVRVSfuygj7nlHlMMCAoyZKSc9zeRNcV07c7HIO%2Bmf%2FRw3wp%2Ff2Ht4ppkLRxLHciaCY95U07XSe9akZ4NBrt6gaSr0qqvOs7huaaeGQlkZ1UkMIb2%2Br4GOqUBkOFYZuUTOq2oPw1ceuZZ9EH52Bxal8euoOTqSHP%2BZY3oxWeulsIN5HMtd8gbkL4IJvORq5a%2BfTS9v1L12eqRyveUcknCDuotDEPk%2Bb8%2BxRDBEeCWr28UgSKDEt5iNcbF6vCz5CiVP3PBKVf1kYBLxHH7Ap1wDiQ97dZ0Tm1OqInmIHfIXVowYSWSar29%2FhqYVGU9RZ8kZd5TsrsmZdL6bBYctv%2Fp&X-Amz-Signature=7b0ca7f9ce8216c8643bcbe7e52da48033d127643efb4a96bd770142c5827d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

