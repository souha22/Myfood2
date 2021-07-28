<?php

namespace App\Entity;

use App\Repository\RecetteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecetteRepository::class)
 */
class Recette
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;




    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing3;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing4;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing5;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing6;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing7;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing8;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing9;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ing10;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $liks;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $unlike;

    public function __construct()
    {

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }


    public function getIng1(): ?string
    {
        return $this->ing1;
    }

    public function setIng1(?string $ing1): self
    {
        $this->ing1 = $ing1;

        return $this;
    }

    public function getIng2(): ?string
    {
        return $this->ing2;
    }

    public function setIng2(?string $ing2): self
    {
        $this->ing2 = $ing2;

        return $this;
    }

    public function getIng3(): ?string
    {
        return $this->ing3;
    }

    public function setIng3(?string $ing3): self
    {
        $this->ing3 = $ing3;

        return $this;
    }

    public function getIng4(): ?string
    {
        return $this->ing4;
    }

    public function setIng4(?string $ing4): self
    {
        $this->ing4 = $ing4;

        return $this;
    }

    public function getIng5(): ?string
    {
        return $this->ing5;
    }

    public function setIng5(?string $ing5): self
    {
        $this->ing5 = $ing5;

        return $this;
    }

    public function getIng6(): ?string
    {
        return $this->ing6;
    }

    public function setIng6(?string $ing6): self
    {
        $this->ing6 = $ing6;

        return $this;
    }

    public function getIng7(): ?string
    {
        return $this->ing7;
    }

    public function setIng7(?string $ing7): self
    {
        $this->ing7 = $ing7;

        return $this;
    }

    public function getIng8(): ?string
    {
        return $this->ing8;
    }

    public function setIng8(?string $ing8): self
    {
        $this->ing8 = $ing8;

        return $this;
    }

    public function getIng9(): ?string
    {
        return $this->ing9;
    }

    public function setIng9(?string $ing9): self
    {
        $this->ing9 = $ing9;

        return $this;
    }

    public function getIng10(): ?string
    {
        return $this->ing10;
    }

    public function setIng10(?string $ing10): self
    {
        $this->ing10 = $ing10;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getLiks(): ?int
    {
        return $this->liks;
    }

    public function setLiks(?int $liks): self
    {
        $this->liks = $liks;

        return $this;
    }

    public function getUnlike(): ?int
    {
        return $this->unlike;
    }

    public function setUnlike(?int $unlike): self
    {
        $this->unlike = $unlike;

        return $this;
    }



}
