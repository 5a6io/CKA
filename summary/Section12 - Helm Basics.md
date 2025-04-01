# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPE4YZM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCq8%2BZ3Rv7qPw5QVh5kw0VLdwb1BJZ3Eh0VJC4TVz%2F23wIhALiVWBWNPt5DOwiXTRgneDdJBr8T%2BmIJJ0nGya1LmDIBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtPZVoxukRQoTOFDYq3AN30D0aKPFxaQD%2BDS97EIhZxLIN7wcN2%2FmF4Sq9Uf%2F4kxy6GtFU9JXD9Js60jr0z4KRA2LUgjVW%2BEwXgFHT9NBz7SIFNKrz0OWYDxtd%2BY%2B8w%2B3dwiW8P3AGC1eap4UxRog%2BjlkYBEkD%2FKHrx7%2FLjrCqzh%2Fulg4AJDobv6oJ4W4cod1u8ZZOW5dBIB6RNB%2BXCtTuFz%2FOq90kJbckW1SOm9dRBC7rhSbUdd9HPV1zpXivQsCVTCGOXbLW0WnBNgSS4%2BxBPmgafcHBrHU3pNpvkagvxjUd30fmP8Tc3sS%2FO41WbC6xTMwBRt29jselVpDrQWVrm%2FGhPF3OygPiMA73PaDEICRhAWQvBzYeSuQDmIywGJRJaVap%2B3nJVu9aoXItQWgljNb5sB0G61jq2cPuVjDcl7ptHSz7ta5xz6GYxYhBGU%2FdbW8B24QVqq8zdfIGBGBg6C3Dg1oRXtOUinkBzgF7UEEy9jJpiiFMQOZCcXzV%2BBcHfNG%2FmxPPZV8nDZInAYRuJtuZriS85v4bwHmSF%2B405AaYFZNiBc%2FnhAopEg%2FMJkLRoNPO76L%2FcfRd7DUBcxMper3wbjbTE7MtlNEYTvQzuJ9RsUdg4LZ1V2rzyvMrxO%2FkcrRsVQuj2vQj6TDS0a%2B%2FBjqkAUVvGqrQ8%2FwSXJDyvYLACWhj7SNN6PIyppmWRlUnjMUTthFz%2FknJldoU8%2BvQzYgC9tSgXkuUYvuwNRcI6FX2p1tf3l%2By%2FCDLABLi4ateo4GdQEdNsCmKQLTZ9wF6Vub6KMkeP6L7vTZXbW%2FE2VFmbhhgPsYQERaZ8QxlNdMwWXA8O64NIBZG2F74DB1uuooUdM%2FOzKwD9Iqdl5MwACrTorxIHXM5&X-Amz-Signature=dee21d610fe392073be68038dd7b0374bf62f4813c0887d8c989fad2e4b05a88&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCZUP7O%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCmBGf1gmmkVVLioTmwRpm8VYEIdin4NSgFbvWsBMvwjgIhAPExNpMEwNLFggN31BvfGxBIRJk4l%2Fjkf%2F7X4tDKG5AlKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXdXXhzqMLjI0fh2sq3AMWrz7zqJlKVJ0IbDLmNuR5B5v%2BEIIZtT3rylsPaGJLSUjAjhVDXVDFOEm5eHfYKJKUXdvbcfZZM8FNfdeMnowViGh2hBOG3y3BR9%2Fn0%2FnXo7VO%2B0ChLgjusJkUEKer31fwcIJqzse8V0K2LT1WpJN3kMjfqk%2BxpVEMlIdlrv%2FhhB%2F538lcZB7%2BcBYu4yZ4jtWDJUCNN4MTsOKuDu4TVa5eUZLLr4sqlq3MzoTN9BRAPC5O5qSlWA5B0HG%2BD6K6ENEoc3Q7fIBCLIiQEjpmydeX7zKr5QETRTlMpSedbt%2F4L2dyL%2FaPd0NpF9r1XmgiT%2FSf4CT29bQocSanXfFyVmFg4NsJMMvukRUxeXNlrWe7MhrwZHZ18DxJZdCjlW8Af2STbqASC2t%2FLlDQY%2F1BdcZmIJeq02FzJYsA4GrzXLJgeyHNei%2F0BQBbEeGXtxujn3c8oWyQ7FA68o58WNC%2FM0p1uulKLUcYz5nGcPp6yC%2F3ULh8JoXok8PYqig%2Fbl4U%2BzUsu4p3%2BBKr2Ar13DCTN6Z%2BpFR393yhLqZhiCDPdQUfCPCX0LGNx9ijqyity66urYi3dxaStlawoUhu%2FjRjYca9Ebr52L%2BUV459IkTw5j%2F0fwJIf4%2BTZQkrNUBb5TCC0q%2B%2FBjqkASOeqvLBzuHfnKRypHLBIvyJp0iVl8voXwqyNGUjAXDq5xNFm7qB4%2F4XCJXiwn4CrkzvUtotSaXHoFuolP52X4koXiL1xPg7oB3U9RSiSjfDTleGGpnSZotrvNXDXduaX1NvaI0oG2UCwntvY%2FcumCsG4x9FKZ5Es9WCnlyZRgx3JBFGE08%2FQcz4qajMkA9suYeFLBZRHHL0eTxj02b7siATY%2B5%2B&X-Amz-Signature=6459aecc8ffc93bab537685627447000abf4cdc9236f9cda8939efa4ea1d82ff&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KO7WHJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWZ1DJ4Swu%2BI6QZt5BL9E9IMVtBt7y0u7qOmgnH25snwIhAK6e1IyJArsCjPebLcg4qJP%2B97Lm7vRsJaMAw9yVma%2FcKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9LvWuX2PTCtlx5UYq3APbJ4n2evLBDi76bC4x%2BKKOv0R1cfL8QClJjkjzErUcsi8kk16qFBPrEy9lRJiWWHdafRLnttUPcoM9yLCOUIOKS1213DbkYQcULBO%2Bco5OStAesn%2Fv5F%2FmAUH8HM2VVtu9rjFRCNvk9MnjPP9N7PD8%2BXBicwxAl6Z8YsXJoNmDQdwXO7yyxxnZVaZwyMJ%2FUMBV%2F1Ubff%2B13TaGvl3i5%2Brdhx2cmCiAL4p%2Bne%2BLzg4qplhh37EX7XgG6%2B7oq7%2FOX3lrJhOwWZoTVrLXAMeOfJIpcLTKW5Xq7IYW1hGIJmRqzGn5v15mSO5Peu3lDPfISTpzf0z2bnl8FteUqSdlL0ymcsBqSwx%2BY0xU1tjjgDddgWxMn63mIH39JFWCDMB5kMdeFu97fG%2BH0nnowtFUH8S4dljyJ3iALtFclFv0fo%2FvSiorfVMJQ12fl4ArizVWptFWwyetGXKds8wtMeD2G0U65utzW%2FPAhMQ6JB0Z%2BWHCXkZP7wEsLLUJRD%2FAs8J7rhwGMLwdNkvAxYUCNdd3f4vPnGVW0%2B4HUCtIAgpl8%2BCqKjt%2FUibN6olVUwjy2zE2SJ5W7cr%2ByE67ZWNR6u3fFccmbIxfmf9SPmUYrcTcScuuPTtIwrCCR%2Fau7nEsRzDC0K%2B%2FBjqkAXb9FSAUVE72wcl5h71W%2BUF7fSPQAf6HQeMcLPRdk%2F0NAhelB4XdSXYzeo6MYK8p1goHIFP5WWcs9LTh532HlUH4QP9Tti1%2Fges2YGYDzni4igJpb4OEkaIZI1kOLC4X0U0l1V4CiHf14zrgXieeeBLE%2BPM0Oc5rPWLfRLD0wvgnHi7ELIkPQHvuWQbD%2BUnC55kK7KVKOYZy%2FkNmqU8zCRPHgs7w&X-Amz-Signature=cb27b9df98c98afc3b9eb65abecaec52400125d2e7aa5d3efea030ee3039a494&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IFYBXIV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCAVOBZ667Y1yluzU6YqR7RWEWPZ4EwBgRcr%2FOnBtgWfwIgeDwRmMLE9M6rxgtdcRiMztdHpsco3oWNM%2B4FOp%2BIO8oqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl8vtI1kZIbAFPdYyrcA60Tc1t%2FegwawbAce0kvZ%2Bmp578nIT58atUCdg9on20QVYaKHX3wijHdNfj3YqAr3o2VFD2d%2B1Dqk3Em4ElE10SvHcfPl9uCVNmIpdG1Qzk0QMC6clV6MWsfengAX8fV%2BAeNWNAWJn2IlqC1MndrYtcMqpmdvl5qVYKQAPFWnjxgfPPZB9M7pWamgqsxvIJznfJCIxdKFpcWaZBEgtxF1cIQWYt2hHgihQOII8HcJdJFkD2teuH9v7sEIeG%2B%2FsDfdBbKjIXzwkz7R0CONaGJvlryOWRPpAEldo10xOxGufl%2BvteaCkDedKtPyhiBQNczlUlla14xrTS1nrl4NTBu%2FlGZNawromgExsbMf00fCs7Ls2ODIcbxQMtrpBx1NhQIWu8jvMNCeDQdV9b6zwCOM04t9RE95JXjr4hduLubD9dWWwfmw6dpif6ZDiT62cQfH5X%2BP%2F1%2FHPc7Hd55nlCY5VNmocD9QyxT5yvGjP5VNuJMezSElfFyzEm%2BTlvvd2uiWzBy6H%2B%2BKGNVzU6dY6HyrTWtNfPgBEd%2FUgPo7U5S6SRi4o5%2B3lXg7ghMDTKMRAS2oduLvdv9NTEOaypt%2BKFrJ5aPjFEFbXdWQX%2B1RcK4EVfA%2FssZ8rzf94Is%2BxGIMKLQr78GOqUBcn4WTtgW%2BXWPmq2LAYhtvv3GwJwbsEy%2BjpQPdMIGJKG0gOCRocC1Y0%2BREiz7ru1e%2BE6yzkw5QLHrf2NSN0xAncsPSxyxREMLXCDt2CQjJX4H1VTVn%2B%2B%2F31zSvMW9VM1wOXclsIhehhFWI%2B%2B8M%2Fqlc8%2BQThVTa7GP1oPnAe4rSJ%2BbcLDp2DeTUD4wvscnj1fJCMLKYu6VHaEwfKxXchadKVInqLUT&X-Amz-Signature=e12c75712fe83fe6e1845ba59e89d4e2c7064f37c6c16014819fc11432da97ca&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUOHLKU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoA%2B6X60fHpJqC9LgydVqiBZInavSY%2Fi%2FJcZJmq4yS2AiASd%2BZIXooUyXnf26NMyIzxBrWdW2mwLsDqPmOA%2FQuBLSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7zu61u3LuCYvW8DKtwDbSYE50zl4iFplJuQn9t%2B3Usaqt5Oo%2FYN8aLhYTSN32XtgK1O3vFoOdrkTPL%2FnmEQKX5cHM0gN2zJHlMj4NaFcffj6RBseDOHPhsYhBupgt3p4E91xs%2FtzXBrWaWVQGUtAraqBJBMI%2Fwzu6Si%2BJQ8k%2BU5lGitClDEhSGvxiX5xlyZlh4H3kNiYnmYdwK5zwFoUBlTBIjng2Ke5IC5Yep8cfR3wlUMisvH3DgaTFFTHZu0ctlai51%2B5vM0Kh3hf727J2S89zJyh9GKhK78AAZIcbUbI2e7EjDiLv8woe0rkwiNVqXy6cyDKq7xqDdMGzmXnpWCMkbGhResge7RucDJqRmD%2FPROQ96RcSu0gXYQ6UZI4d8usGhTv3EloOPlFmf58n9%2F0pRoue3VkXOT4omWbN8UXfUavPrI7pCEx7Wdqv3dBKfuSwccbrx1J0wunm07iB%2BIrjQQjJDFbxHShlk5qVFl7o4fOnH73zY99qyglGwjsEoFSwZ1lqhKJLM4Vtvx2HWpyIO6oqMlqIQ2jIwkI7L5Lkftrno2JU3RSeoq%2BMFvMKFj6y9wNkq5xhxApdLb4ZjzQc0%2FYJ93Rehmbvv5GM0P9U4Oyb0ivMJrQwwNZIxZ6v2SMzRrHxclZ5AwxtGvvwY6pgFjw6LKpG%2FL5CP0MyC8LoM5RNRQcgkCNKLUpP4U8T7oueXjRSODU2Jk1amXXMc9sYoyahNTQEHEH5GdeRWov6n58gxlRDgk0E3bjOClFIhE2Sdltva0OSeFQUnMihKTtsApSUI2ZyhV7GhAWvtJO%2FuWe%2BNRmWvgCtlnD2ZnauAD2%2B57vlF85NyGxoV1bSO3FuzWVaFxBuCDMgtSy6OLbeN6MXCQ%2Fwo9&X-Amz-Signature=7670aab45774ac6f913d53aee4f8e489e7705aa59da463ca4966808e16a559fe&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYM3UOI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFBsMnsVum79v4G4nkszo%2BnCWrCKhVXq6bsomY1ElQqdAiEA47NtG5xxNkJZ59%2FMjI7iZMDNdUU22IwCUYSSgO3UJjcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCxVerdUU778tMKnircA8oBEmnZ8Y4ZCx%2BiRUV5oDO8iZdOuAr%2BPlc%2BlRT%2FikS8gDDvPFKI0SM1jRUFRqoagNyUd8NQEcB1bgZQ%2F%2BSRxBw7BXxHgdTjVnvbRQ%2Ban2efqsSfSjZWRu3ijmggUxWQE5gNteAObA2AlYaLU5EorPDqs%2Bd7m63RkI49swmxSZMrYRFg%2F08godCqWHa%2B9iK4mfzPJSwMqwQ11pia170HQ%2Fl729JNMZ%2FBRauLmIZ%2F7uLj%2F%2FpKb0cNz2GgrseARW2XdiCGqBISXKkZn7Uc7hsAmAAF%2BAqLouctiuKwYurQ7Chkt8vkV%2FKDE5frostm78H0cKApVSyiuZ1Uaj%2FHccEdLeRh4%2FzKogxNO2WHkGGW6j%2FzLRr6FIQovnH0ykCuZht0s7z6%2BwZi8EOenAwy16D1A%2BeH07b04eKCI8N%2FwNWjaNAaYfPYGDwga%2FYVMxoaDhvpGXtLkerLt6x7VT2pz8jWUP9vrAuiCJ37WERO27a27SwFH%2F9fcXcuRowPF%2FUGREvFV%2FGjvLdCegQKiUMI%2FiUJfyXHoquKMzjBF5TxHSqbqdFjEumLYr2sf3M1N0kIvpKOo9b4TxYWPel%2FwuC2K25gtgTBmKsP0C8NbFy5GWGMAqgIp2sl%2BONYh%2FdCLDyIMN7Rr78GOqUBhHTUC8nSDqZaHB%2Fwl%2FUuJXbNmmd5POvtVldr9QgOqbzN8I7BbLmZ%2BeoTNAVRVxS2TVzNXtQjdBunedFVKBF6ZVkOPcTcLhCPm4tf8R6vcCWHqKUfdHKtTuLmW7SfPlJdJL5TayWzdzg%2FWnIfi5Fo0kOCqGD4vuM8IATm84ok7bDOohUBe2LqyUrdZY8XFbXkqfxCvaEBpFdheJnJugoeX%2BKkLKQf&X-Amz-Signature=7e1c4064fdc1324ad8fc3d73d272afdde7a8298f0249c2c362039c78daea5bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSZS63D%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEBP2dOhCjfsFy1%2BAHQiWtMYk4ukV3NpdTN%2BdEK6yWcGAiEAg1jJWAy4d7YDx7n8%2FVJ6vnjNDvJlZifCikDq2F6c%2BWQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59jp2PxrjaBt3aACrcA15%2Bz04AZ%2Fvb4FjDJTdkLQ8ksLnylk2eajEFHkqZrj38UznkdKdjjRMce%2FLng4yPeHBi5W%2BHcSyF1I%2FJifJSrHZkEn2m8zOoFYkAryngHCE5icFisjZhvKL189px%2FNReI5IE2hEgMsOXzabUjR5x7JQLnQOuN1XJiG8Q%2BTMw9uFAvUH5pq7UWv3Gk4IAk8Ek%2FewkI3Lnsm8pdY7BOHZ%2Fc1OfFWSoDaUPB2nxpYekxGwHi%2Blj6Ic6z9jzeI2rmDNJeIpnQWlMvXqeiQh%2Ft5v%2BbvafnN2bZrV4%2Fn6VLK1KHRt6ssQdj5We7TAkIT83OeeuC7aLczASHQYpllqwabHdoHMMqp%2FZ%2Fomsc9ZtYNArcxt7mlqQivhPEdlKNqWMZyr0y0c0pNukT9ESx9O6WwDTrITilPL7faT8TOw23QvCsh59Fl0N8F5pd7yOqgE5nor%2B%2BLgIKTt2h1Nxc%2B%2BtMdq39BmJU3dZFaGK6NgG5ug2Dd%2BmmgayE1ziPLrrCWfYj9qUJoMzFA5UqI3%2B45JHt2DyDXaE82Ulhf2y9lCk%2FhluxlKzCnHdhJc1XDVkMR7YubSmlVF%2FijdbhYtCp3GtHjU8k6vzmGBzNbtsJkhPGltKWK6vCN3fMN%2FiVdM0VRLzMKXQr78GOqUB9bkVET%2BVuPSHG3jJMsuk%2BWZPKLUL2uz605dL9fBLzbTrDxVVBO4znAUqW%2F0BaJN5msKapj4XrqXZCdekgToQCESptFsiqOxLk0Hdq440NLhHyuOXcJOIVjDmZDgvs5vq0slbCds%2BUmXmfZ72qgb6MZN0K%2BfauU%2FvJPe6vPh9NH6axNKmISGe6OhgMn7EGk7fndVT7Nsw%2FDzKw%2FibJukwnAOxOHBB&X-Amz-Signature=56f1a383b9e8304b91958d61d7b89b7767e7fcd592398590f1d8f2f57fafa9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZLMPXT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDES5VRhahr%2FhEhza5W1og4FN7C6ZUbfOIdrJjBxQ2lOAiEA98h2r02ZourWWNTcI5OP1SzD8XG5gF%2FCByF1vY%2Bh7ygqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7I29M3MZi%2FtJXpeSrcA37RKguWvmskjLSQTNZTawD6C0gmN%2FKxjamp7fCAGRT%2FyVaTXaQcb3qnU81hx1KzGvJjw%2FpM%2F8e7OCcrXPiEG0nLeiKnorPNW8BKO7Xg2pXV7un%2BN37rMIQzGgxtG3TQiEMpyL7Y6%2F66JysCk91AxosxzWmqWUDX%2By1YI2iQFmguE4iLS1iC3jsZFu89i%2BnqAmpsDlzh5XoJE7%2F1%2FK0Nmzs41sHxHKaxq13%2FD%2BVQQlpBg2N0OyPqF%2FSuiEJf6%2FzfBaKlEV17ZFNBqsC9sapd3tOs5qa8k74uPKoyZw5JzZ52McWo5zToRLT8PeibGKGJKNzmndShNiN1liK3YmDFpVj%2BgL%2Fs5U8FVzYUwwweaS8W5BU%2BDCw5n%2BZnSNbmouyAp557zZ%2Bb6iVfUChVo5evoT99sdv%2BYI92%2FBYJ9z213w0%2FIa3oCInqpOhQKItgDfZuKa%2FdX%2Fcoise%2FWHJOsatc9yWltGP6XTJgc7%2BiKwHz%2Bps5OEzQAY9OU4aO%2F7TA%2BBLjpePl77AZVlp%2Ftw06VpvWskuamkPavMebKwR2AfZt%2FP9KFRpnmZdacTufyVQIQh2pr9KY6tlTKAaPByni84UZFdTiT22g9EDiVvNNi0AxgpQJaTrhcR2ka5LyG1UKMODRr78GOqUB2kLQqp39HbgKnukY79xtOnRqW0fOrtCtBMgPry5G6%2B1khdZLWRBIQi3hY4UgVZwK24LK6XlY%2FbnYxof8z85gJ91dEuxDXPgggZNt5NXIBwFEpcFaFNld9xKGLGUxkPto8MeInwUwKkvA7bepZ%2B4sYjNs2kX7Ta238p3ywfo0%2BcK80hwKaX6yt5Ebmw64GNWWajce%2BFEGpQydgxE6xihyBTMwb2Y%2F&X-Amz-Signature=89538af42595c8cdcb15d4a639414b3759856ade1e60e37ecc472eb77def6516&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJS7S5J%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIGrA1qch8eOPN4oyQSmDiO41g1v3rKMm%2F2GEZPhNA53HAiEAxM58rL2t4y8TRE%2BEjZAWaYX1FyCgL%2BfP7qw0%2FUqIk1YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKLSQYC0xZ8Y6AoPyrcA5uc0oPqj7B2fy0CVkdjhyY4Yind6dYGeaUbG6YpqaXuIpQowSLErAepTFbADL%2BjDVyii7IErRJ7TqdeNh1ZH6hOJp34lhIy9lyfanI3x4tiEidHT3I7oMsG8MXpihbedU9G6AAURadvaUR45OPO%2Bo1O%2FjhAH7Om9cG%2FBJ1J6TGf%2F7dos%2FDi7wa%2Ff8CeUUGAwf3lxB9rQmJVWnChhqGQk%2FyqHrkEF7eGM3q%2FtLJUuZhciNzfcMKbAWeNhwY2bAtSdXQTZkbq3cJm9BqzT0VpCrjjIfIk2RC6vwspVpR9ZoLo1ldKM3B%2FqXTDUiljAuismpxe4MENDeIzzhtkMBDBknYpOoPeZm83BN5ghfpiHdbodO83RVGVwqcKvIr69r0KZWr4GxbANjSpCqy2dXPzf4cURRbK1G8RVOaa9hJd7weapuSORq5ZhiHWgKh2X0JhPPlJ%2BSgLrdA8AHXrjTLsL0xEGFUPuhkFBH4wnzTn%2FkOe50hqsnykZU%2Fa2Iaq3skpVb%2Fs5pb88AqSWJKrugMgJRt%2BrraArxZR3KUuEi982xMc%2BbksRrqEpoUDvyQRYfDwKZeC5%2FqW%2BaYajYuI6pVFY3lBjfPs2SHOpFEYantwo7kOEuPVtQD8FcCwF92xMMLQr78GOqUBcnlIhcYkyQPyAVj%2F2sZ%2BY5hRt7WQV9HEljXjnfNwU7NylvyW5s4khVezBFmYf77WzsuGoYUuSnQwnmlNo4u7KEOc%2BAW7MHe7wlWWqZMlfe2zgTWT%2BUzHybjFTnP3rr5emAbet5iEFh3zUfsByKxKdZ9y%2BzpySfYfZG2sVsTpSJYomviEZI5oFfnGqT0H66dj1NXTMT9NV6EIq%2BQ5JgDly%2B3djL7G&X-Amz-Signature=9d3a05a7e8d01af8a53bc607a2d3f9b023b13718562aafe7a6ef9659f3b8727d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

