# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGX6AQO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2t2dZ%2FPLJ1SyAULm6BK6p8kMniT4DDH1r8ZvH3LXOggIhANEI1ikUqVkkipbeiWghaMYeR6AJUJKxMEoOnFdQE9t4Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyNOmSMPhsNzqic5REq3AP65sbfKcql3aX4W7f%2FtWkUDSImdSbynGslQwgoIDb2oHcQggh7lHLA644RjjMQkywQDiMkzTBQ4RRvqT1H6JIrdv3vs3BXmIXppHB3DeU6nZ15abbutsBuSsB7%2Bs0jem4knvSEzYeuvI%2FVG6GixD%2B8Rpkr%2FicInEuBOK0Nwnt7dueU8pkSkOdvcSUS0t4ERFRUr4%2BjUDVOlp05t4HFV4%2FUcix6TGwdOTb5EraDldNmGKIMIGrDIICXiI7bhwdOMzxDeKz6WXDk%2BP8qvjnIp6Bvfzmt5EuiCQ7fKox6VhnVsLaWiT3BKN%2Bq9PYUP72F%2FrkorzAN6e52GB%2BEadsqxOU5zngF2ueRsf9w3sc2vWi1CXgWH89rqGS3abY6qWFyA25jcgBE6MLF%2BQ6evd%2F9nr2ERLmHL4gxeA4jmW3UnFKTckZ1r%2BUqqJqmxexlhtXox7AehvSKCQB2IrBLweJYgIAGnyyBNCh9qPs2zffLMWrGP4E8ZAGzkdbw12DAmQ%2Fhypa0jlCLxBHjSR5hZzy%2F2sVs2qP1Tqa6wgsy%2FYtM%2F8sDHAm8LetaQ%2BBdCzn%2FAcIaFfDnBz1A8fAk5Kk73nbxM5hGQHbrRb84b6H%2BbGJoxIdZ9U1GsoIYyEY5WF2b5zCX79W%2BBjqkAasm4COiYlYdvNWdHJL7aFCr2VxoXZJU8mxLt1CDNdAEwo0%2BGbzp5pulmSUJgj21EoCLlwI4OT3qZJwe1gA8S9iG3WNwm733kQ48Y8TsUGr%2FvIQaGj8HhuTOoc25ej7fXCeEyu6C4qbMUwgyY8wEmu0g87O7w8MbVgy7eDdk1oY2b%2BqpR6vcnpP3mVv71to5E54p9EUt8UzBMAAf36IvJrbh67v%2F&X-Amz-Signature=c42b85468d13f9ac2826c4c185ed6550c6e3567a120f44f258bcffffb865f164&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNZA3V3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNcwwG3i%2BNorhn3uH1volP6c5W2CK6vfYsm49JbP27ZAiA5NEBrlAjEQiLHMv7l4CQSnNxQISo6r9i9VUppWediTyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMeMM%2BTb5Wsp6QwzqsKtwDVSBSxGvR90xRvDiGuDYlRT1nBpW59HMnM6HgEVGM%2BXiE%2FLSXjxmkBzKbzuDXPOPceOlAmpCtEyEbRZlmyjdFAYU%2FXqU6Q90qsKICFkTdMhHSyQlhNHbxTCyx%2FcUbcES85u5RJRsUoQjMOkeD68OVEwvN9xJyJM75o0SwN%2FCBL%2Bb15vhX6c%2F5IIhmOS%2FWVK6ylOLPjyoMZN%2B%2BoD4vN%2FiVd%2F06EIz7WASFWaMooFTFl3A7nkKxUNJAEF9aPjgGRiKBjDKSuCWd1u9AkdTb6g1inirwwivPdyoz8VUHRMIsYwCGFRgzTt6aMxSs7ky5Q%2BkUIiQuSHPK0cPwpRSErXVXjb6WsTajHdR0%2FBN75CsZD8dTnx916iK29k5mW1xL6do%2FXXcCsOpadN0jQlJFvnhjCtuB1yWxNgc5GYe4PLjQSUba%2BWDfbuB0etHJS69MK6GUXAYGqI2DjBQlSKtVj662gQfD85Xjw15jBnDRHMR9TFbyY6f%2F7RgHy%2B2O7HcH2KJz3px4q3PgHZleRTz0Dik4bCU%2B%2FlLvuiKSykqfV8bu8kfu0MZ6cwSLFunxnPH2f0d55EOqqk7c1lFvkmYNPSDkhO6gRKza68cN52zrj%2FSLH4BY5lV%2FxudpmxT7hYMwwe%2FVvgY6pgHlduxUeNV0q8Y8ovKLFthQ7HoXvu3v9u3BxldPJT%2BLJ8TgmasccP17FF%2Bo%2FXYh%2F2X4zfRLBXu4njFE2HvWEm2ZkMxNvrqO8qicj%2Bcj7Dgf%2BC7jkGyazwEzaUZ4tcfTuBOjkXoO91uzZvmSOwO%2BmP5LcQUQlVzVXhFSZJhxAWnxnbV1Ee1%2BJ2wQKU6%2FJmQaRQn%2FXWC3jBCzc9dq7qH88sI8fHZOxUDM&X-Amz-Signature=3775466dcd5aae951673dafc07c0d331c947acbfd9e638cda061b6b87db9136c&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZE3BE5P%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8Qp6%2FpJVl8y0eNbAPa4l9FsAa2H%2B0bRSn22m4jbRO3AiEA%2BwbZF9YiWSEsHUjgp6WbZbhDEIvVFi8hkFNDJoWPelAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLMPMrDv7i6hObPzeircA5BwOa3U3fYlkvh7De3NcMMO3%2F%2ByNe3HCK1l92EmPPs5qHTfbhfwRyR3zIQdAAFiJbS6ZXRM0kjoz3apZwIkot8XBJawFSYNeTHDTow34mx9yiwZyl2t5SzPkqQA1O1Xjb1z8K7pxcoe2q7JrkPOdYqwSzSm8aKnXC6YyFz3Vu8io4KfJDdkUNS%2Bn5nFadnFOPTNR5gJHS5y2KsOeWlQo8q96Y9mljJv%2Bb2Hc9HTqItGJCjzA6mNMWpeC1tdQDfaezS32Vg6lNu52scuR3VpdDNIZkDyqxA2BZpMRRrwhbkX4Dap7WgVsiVd6g5ZJUKKJvtzLo%2Bq750SF9RpNvgiZo%2FeFLKlzdUDu8eJZ4ppUNTx8cansHsRC34OYh1nOen83PO%2FFm0cejKA4DaQ7mgOUARbghUIykS7PMQS3q%2BBA44jFhuh%2BJxkI2xfzrrh%2BBAeZK6ZTwUEhZ5V1nzPnpH8U9MMp8Jq%2BgdSVNI2GXusGO%2Fx7WIrij32ITtMga5afK50NGa28r2H36UZ0bcB9PIa26xrhhAuNMQcsh0ep0AGXtya2JAyFIBNov8M%2BVHD1toApZgSi4VXFAsi%2Fm2tBtrcEsz%2F1x7nHE83f5fWxZm5lRyKsvbPWnkAGmhgyqblMPru1b4GOqUBBC50MEeELLRGllS%2FfsD%2FkHVw3KHlA%2ByBKoXLNQ%2ByxwlM7cjvLd9XQJike8qu%2FP6vsowcavyNQ6ViIJG5Tesry8pleo02Sp8scSACJvE05T4cyXT8VSSUIt%2FkGxyZ5EwWqSXaGt%2Bq5IK3q4ZetYi%2FgN1iXWfbjX74itP2pMKeiUB10t6m4j6Pew1QaLogMNWiJO5UWVTbzk7sswuY9rWoCE3XDSZ3&X-Amz-Signature=dae676031960d0d477c84c7389dda2e415bdcf411e6cb91f3f11763f890240d3&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNJR7WG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDda1U%2FjE5yOQSfBpeOW64yn%2FH67KQLUqNj%2FlRYQji4dwIhANwuslH8URyvDIwj8m3ki0d3m%2FCh%2FTGPYW%2F0a50ZxtsuKv8DCBYQABoMNjM3NDIzMTgzODA1IgzEC4eJOYpFUR1Y3QEq3AMcAdwdnXjXnJPi0rXC0rcJk8WoqbtxJw4Pn%2FIyRtZEX3dfPmfmEHjWeDVpCenttc7ha2fCySyHXl3xgCL5vmzrRF1TbmSQndR8cMF5VSV0hpnMfcV4pgSTKOSFbqqL2qWEYT%2FbHN1TFMfnZ4Yd8pirANOpMJS6wOzwCvLKsPT3SI63aPmvmmULkg2ymP6cxYl%2Faa19pX1lbGICvkcrpB4Fv6W10t4DW8fayyLhsup2giMZ9VqAcgNKXog%2FS%2FYGhrQt4bSS3go7cHRnJ%2FAYeyDBge6YjSUsnLMQKWvlnun7DpNLFlcyDENbxvLJpyNtlT3J0bCErhiVA2UhZoP%2BhnmPbeVzz%2Ftxwmyf%2BEgNoe2EVbDD6rB46%2F%2BnFL%2BX1KmGPwW6yvQsUmHMBZZ4tCv%2B9aSiJYXo7g9efk2G8Tu0oh9cZlnGj1H40lwY65Y3AXZxbGrVdEOLil3vaPsevyHBF%2BrnFLv%2FBB07ezJLLiARk5rGEQCBtlUG5huxU9CyXWHMPlwB7pmMnTA2pzhN4XQHta0pSP%2F9EDSGCvRDG2KiLHHAgPoS5hnx%2Fuv%2Bj%2B9%2BiCeEhdIq4VgRq32jSsW6dd8zYZfjbJFFD9NSswoRjGckx63k9YwffUwAhl34mitQiTCX79W%2BBjqkAUTkYr7WrwdkzJ7lByzzaw63siyMUrqBh8HNC1lmcFeYwhGyMSBbeyVnQkaowB27KSnEsuzmdzWoFp2scSEkZH4qrACn9RQGBchTRSGZRIWNGijOIfa4qzdW9VMPB33eii5VoRUY18epIjTqMnRsdPtcOYi7bfzCSDjIIGeuQ74ucYvlyxEjrDbf%2Ftbn8iLM8nkD19kGNdrF7q%2BZ%2Fjba6oFAHBSQ&X-Amz-Signature=f6dd5c03b9d78e407c5b27edefc6a96e52e93ca3c8c51a48810e811cf8f70162&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSM4QVRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBe9vdFVrOYuGMcvi4YprWbepZ52aXfu05LvakjacQqwIgRHG1wT0JmAhrXR9WiPsUHgtYXVRuO99Tz5eqGeib2Gwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKaIz62s7q8SyUzEeircAxJxsjE%2BJqMVwE3njma3JYagzaSlBfeGfou3adZPooJgD1Ty1jVH4xLWp3%2BFLbC58gxRrEY8xj951DGsb4rV9SVZNsomogd%2FRi5Sn2lELDelM7y0qNVnpJfHQzqYgUhdM0pdjICDk%2Fh9SUZtsjw1JagZ5Szf7lWOs%2Fe9n9ZkLSu9yFt7i0IpRlc6Zlqv3HE%2BSGbdostVMDesePQdpic3ZtCETlPiKj3kbIqvTQoCp7nD9KKOI4%2B401up7MuZJLuRRTMnY97rLoTJWbn8eBiH%2BUcUpN%2BKkNc2HcOm%2BoZwO1aRZt%2FVqJFXMlweE3vD1Gr%2FLPLNJ4NMlyuwHnGandmT9k2pZsfpXi1eCrasK4j7LozFT2kpPcrcHjIT3MdsztuUE0wThpK2fzAOz%2FbnuOjnbCMfPlWjjS9rdiJCz3fy23PeSCDaGpp%2F%2BSLMSHYIHIyY0TR2kq6h5TqfS3siwcY5wS2mvNKwGbgoNfwoyVc%2F6t%2FpcFko1CPqq3sWAK7UtGC1F6Apv%2B7AST39V4HSLVPTPrK%2F92970LkeLG7oIgcPxx1eNEA7C4FPspAsqpIRXhECW8Uk1MNNshEwlB4X8kgUVqWbnV2%2BPvCk1cDx8aldNBHWe6phIf8RZ4DG5v0jMPju1b4GOqUBjvOxAlGUyCVHMsNOyJQaG%2FYHBCYh76SYyadTKWfscaubWlmqrZO6rQ02e%2FbsgFfOYkyT9UcHNwqsTvbhXFOxfvvMi%2BnzJYLF6D8Wv5k%2Ff%2Bs2R%2BZxxXvMCsFIXICLy90BEALz2VPGtyWIIQDA0gJN4CWLCT3rtdwQnsV6a4BeTix4TuPSTsXZhTl1nt58uW2r2pGonQLPrEQot50dWSuHF%2BDZXpXM&X-Amz-Signature=d1f8d9fe229115eb17458678612515f64fb09f8cef9dc15625f4b23781e7cd50&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLIIP6P%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnd%2F%2BFVlu4qikDiLDOhtRA2bVEDqiG0uvadhXVGiNrQIhAL023omItOpgxXX8HxinbMsolKu8gSEJRH1wXGir5LT6Kv8DCBYQABoMNjM3NDIzMTgzODA1IgwRNVk%2BVBefv5wxegoq3APadOFjndMgXUO2EYdMnd0sj2EI844fM5XoZchhpqVw4ad0Dw4VoZLpm%2B%2BFVY%2F4De1U3SqZWvZiHSm0BYkFklo9%2FacKKAVMi%2BWJT%2BDVuLfCk%2F2ULCy7F4kLCP4ooy%2F%2FKF0km7gtYQq9gqV5e5uNBsPx296VMRUszMR8N8jsZmJVpYIVbUXowBTaZj9kpaG16BHUSMgXmxDrC6eI0Oz2UTjl240jsY6RrjhbGlRJxM0xw0stK7JM4%2FDYPBgaIdYrMAdIqoNM3QQzm0jzyqoJvFjHUC55cCFB3J0cOOzDQFGqdMVfV9LXNeNfe5J8RCPe%2BlPQxPOTqfa82iN7tWoQK3SORDarMkBPjrTcPHmKGVeTVMFHIu9YVbGhrpE8AOIDB%2FpJ5IiIkODN1poBb3acpXeNjKoAwFcm7ieIrs5yXpNGxd3SvyNJ5ygo6HxIfxQejMBm6aOPokLTAtM1M%2B4hghWElDUURvCuN%2BPobVIKa6vwXGO7j1iZnNTFkMl9okD8hL8tkIj5SkhyXQJTaDv%2F7MRZq9KpfMCjvkv86%2Fxkzdbu3keCASJPnEuspRNvqkQI6ipeAGHqRcurqobp8Q3n81FeI8It6EbMC38cMPWtkGcVkziADRDI%2BkLao0aQ4jCP79W%2BBjqkAQtPvs9l37oJt0mL%2BsNZh7xEIPS2Rpxe2GPb1eltgbR%2BPCMKqDXzQxjrmQyNntRm9DYa%2FIRG6RFAKe3VPWOr%2BFmFO%2BAdh6YGMBWaOCKtaTkHeQsd%2BVmkHnAcYvmJZaTc%2FrKXv%2F4ipeuZZ21GtcCA1K32hBYn6iy%2FyXeQQ6SOyczL9BWv7rErKhKSYzCIRpbwG6ilCTnzR3LLtf7M6ug%2B1OoxWeem&X-Amz-Signature=8c1d5af8facc8838e09aa3fea84a7fc4302d9f98c803b3592f9f3af7dcb8b8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5SEBFO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD784BLXtUBv68q3QR31sJDrOjELSGonvz%2FV1ySLXdEdQIgA2WRiANIc6aRHOAbENp9nhqVRKdIQvfRWX%2BZBG8YIPsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFhz4uQ3R5qCDYolHCrcA3E6nhO0uYAqwE5E5hWpFLHNTlh9WGlIUATXyONL1rNssoY6iIeFvgOek7T4skK5ynNaxLZgPLtFY%2BLzxthit%2BVznfrcqYyTMSk5VlXTBCUFzUQ%2FRW7y0AC%2BLrv0iGR27JWVWlLxLYY9A%2BHzqGQnq0%2FLjsv7e3VYz6E8yvOW5SdcFaORF2F%2BrPaGWcX4Xctlbqy2xeIt2UevpVMMhqYW0XwvvjB8sLrkK9wDGZti275KN5VO3qgHPdgg6MmJBSfRF9LH0ABvOwI%2F5v5qTWnT%2BvXsels5zQbjb5hcDYGG2Y%2B%2BjkdrOtZbbiSu28rAdt9Q308ekJhUdPVtav4plUC9a0z%2BTDrkINIZRM9ML%2FZ2YNo4SqyPXdE6x2r2diwvbnrkd3xPjLOV6%2FvLuJCcB4DVfIxif8MDpQK%2BV4zIMQz2khM5avSWdWokRlUIgJNVFO7FlGFo1c8Oe9N0ghHbjsxWGctpjS%2FsKyYl5ozKVv031GvRFWDac00Q3j6t%2FTaV26iMAuC%2FZzoUpoT7DITXooLXcDCtHGIGBlzMMorgy1uGzV8rICSYIzwXrmlZJhOe4r%2F%2Fco5nVzAQ6IpaExgK8sJGYS1QhKL1e0I6DKr0uMajNsL8%2FXiNEh9W4XqSDcJGMPvu1b4GOqUB%2FlhUn1D6pam1WKOSb8XOVzvLRahBXkEOUoHN0dU%2F8JtqTGnAF33HIJAtkzksu5Qr5NAWf8tEUzirOQQTFa41XR6GLUMmrRyjauETilcMlOtlWv3tB01l4VWuC2Cu5gohHP39rg5gOkBigQkkxiMcIcX%2F5%2FpoA4vuynDgX1TdO7sUvbbNRevkhNtvQuUjoZlkWH3tXA4ZGg%2BdBamhOKNbao9CvHa9&X-Amz-Signature=11f1a2231bbfac597950582bcc54ada0b4470db52cea08eaab4798e9bb7f7542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCAO2C46%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVnjPHnH3qy1OPf4QJDDxPiqpX%2BGOjqConUlMDFYkeBAiEAi9%2Bt8hPXcH%2BrKlZdIjmaGirpNs1LsWQ7602kjetWws0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDMKYdgXkkNz8HMWCyrcA6H5F67%2BTYvRHadCj9hmOgF7LsMsXyH2p87KlbsdrpFDZx3DJoxjAO%2Fz3UdSdiaY0hKzP%2F%2B1VNCf3tCfvQF4RTyk6jHc8vQI9S1EQFCngXD0v1h%2B3VFCp6LKWsliZuJj8GXEN9xdSAXaTp%2BdqNqU4LGLUHb0iD8PKgvWSCaT1nCDFHE3m7xptaqOnQ8uhLdhTrnj45XT7NbM8EUc9pDHhc1UWj93V6cY%2BTTHJL%2Br1E55N2XtkyS6bmBS3%2F1NgZK8Hi9lA4spQ9RtCv1dhRzI2GeZHWrXWdUEeAXuEuFxgYvdwBRvNHIgfn7rTRcUWpidO9AcmLHrjQRglQTZMQrFGqC0ysACzYA7VRYpTPuw60RrcjjCQh4oyETVhRIKziVqpKk9LRqHt%2FW8omVZZQjwCPljFkPNEVxHBv%2BJczFIZYlLoZnWPkifLseiBZSByJW8wkvyg2tHjCI6ZDUdjhapQ52iNH7TGydU4Y9OO3Lgxd%2BCk3l1LIma%2Fh8f6iV647VkfY%2F3scYTqi8zOR3kmdH1ThyADPlnjNjByR3Ox%2BWXClWIrB%2FQjXbSPP98JezS3QzfQv3xgpMnfsh%2BoME6bzUlazac3TvXhD2ZMZMSZ2kVPvThJPRVHua84zUzJnvKMITv1b4GOqUBmIn%2F0KQB2MPBRME8kqaTG7DF1vAdrppq8g%2F6Z5a7ZzjmZcdJN5arbkWWITnmaZ2J%2FgQgFZnmRGNh0W2NCRmMwgRX4e85l4tJ1OBTfe%2BQb6O1ASQXWHPMfkTb9l5IHC28USlHJzAG2TU%2BgBfirhnsmVb7ZPmTVaCaLIbL3Jo4gzR8xa4ufjF%2FEB2LI1Hi67PEYNTRsEbPHkdPesymiMi4jQSkSB99&X-Amz-Signature=78547c78392fd2fbf97b66ca0798ef513fcd74782dbfbcba3bde58703c555be5&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRUHHSO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZmmgbt7pvoqNmeKfV%2BgRB9yqqgx5BFubS%2FNOTSET3ngIgdCfpJJmBEzb9d8EuY5t7JX2UmLQ2Tv8AIQ3%2BD84%2FbcQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDG3QIxHhTLHOQzSlPyrcAxAxalH1jS%2FKd3NilI7sdovOGbr46qWhEC9Lfjn2HUm3NBQBkFs1TUaRxZGpYUIwIAnJtSG3QJh1B7x8GALnWwEnmoB5Ks1M9NDiGR5bqn6DvA884WRlPn3uOns5Ve2mA1oBGocOj8vGWhF02Bs4e4xc1ZEjldl55Ab6U%2BYsCosxVtQt2vwF5nNH0GBGJFyTkCLktYUrwAdR3X0oEsJXCcSWVh%2FPpLFCmQQieufc78EWH2dhBlkJ%2FdhbX9Y17OO8h2a4NzGximJp5y71YphIAMaCdTpS2u0C5RTT1F97gZTlxMBPCB7rJwQ0ODxlcVPHS8uAIkkVz56yakmDiTinIfmgpl1EPDXkylnsBmVKISJose6lRyP5GxvstJCXrAvSAwcdlOowS5yxhQn29a9G9QOET1DCFB0z1nWAAZAbY4QrF%2FF0SZmXNAjGVvCbFRcTnmmvxQ0ND5X7DDd7EXIXAWFTUMjzHhA5%2B1OKIfuO%2BcYN6OzHMTPaxpv1sbdtJgTLmfcN9ZNUmW2AFnPAu70WDPQ95cE6ZIlrWnc92NDOAjt0TU1A0zny%2F3jbDL%2B9uvlXss%2FFoWhNk%2B0FH5ezisxc3T4P0Una2f6YbYE%2BWlJVIzzyqF1HUxYrXDXG7FW%2BMIzv1b4GOqUBmXKsauhzGer7dX9vionC3M37%2Bbo4rO6k2htltfFBmPjCtjjB2q799WDgb9KS9ZiWPSZ%2Bo6Sxcg9UuRfPXgp3znk0mmQd3zfLvk4rXXaJ%2F%2FvNi7QxCQXw82JiNVn0QkWoUsf7gy0C6SqdHWwJgFkQGJjjoaEVufQi5QtEXYuC7X3Vqx3rwILM2uRxCfVqWEDNN4nnAL7bGe2Vb6dmt6DQPADiOpvA&X-Amz-Signature=3ceae1162f01ef304a8fb33dd6cb8ac2c3fe4fa83acce17b2f7884f7642ab7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

