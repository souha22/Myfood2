<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
     /**
     * @Route("/user")
     */
class UserController extends AbstractController
{

    /**
     * @var RestServiceController
     */
    private $restService;

    public function __construct(RestServiceController  $restService)
    {
        $this->restService = $restService;
    }


    /**
     * @Route("/getAll", name="User_getAll", methods={"GET"})
     * @param UserRepository $repository
     * @return Response
     */
    public function getAllAction(UserRepository $repository): Response
    {
        return $this->restService->getAllAction($repository);
    }

    /**
     * @Route("/add", name="User_create", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createAction(Request $request): Response
    {
        return $this->restService->createAction($request, "App\Entity\User");
    }

    /**
     * @Route("/update/{id}", name="User_update", methods={"PUT"})
     * @return Response
     */

    public function updateAction(User $User, Request $request): Response
    {
        return $this->restService->updateAction($User, $request);
    }

    /**
     * @Route("/delete/{id}", name="User_delete", methods={"DELETE"})
     * @param int $id
     * @param UserRepository $repository
     * @return Response
     */

    public function deleteAction($id, UserRepository $repository): Response
    {
        return $this->restService->deleteAction($id, $repository);
    }


}
